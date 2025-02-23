import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

import { JwtService } from './jwt.service';
import { loginType } from '../../shared/models/auth/login.model';
import { registerType } from '../../shared/models/auth/resgister.model';
import { data } from 'autoprefixer';
import { UserStore } from '../../stores/user/user.store';
import {DemLoginGQL, DemLoginQuery} from "../../data-access/generated/generated";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user = '';

  private userStore = inject(UserStore);

  private demLoginGql: DemLoginGQL;

  constructor(
    private httpClient: HttpClient,
    private jwtService: JwtService,
    demLoginGql: DemLoginGQL
  ) {
    this.demLoginGql = demLoginGql;
  }

  login(body: loginType): Observable<DemLoginQuery['login']> {
    return this.demLoginGql
      .fetch(body, {
        fetchPolicy: 'no-cache',
      })
      .pipe(
        map((res) => res.data.login),
        tap((data) => this.userStore.updateToken(data?.accessToken ?? ''))
      );
  }

  register(body: registerType): Observable<any> {
    return of();
  }

  logout(): Observable<any> {
    this.setAuthentication(false);
    return this.isAuth.asObservable();
  }

  setAuthentication(auth: boolean) {
    this.isAuth.next(auth);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  getUser(): string {
    const accessToken = localStorage.getItem('accessToken');
    const token = this.jwtService.decodeToken(accessToken!);
    this.user = this.jwtService.getUserFromToken(token);
    return this.user;
  }

  checkAuthentication() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const decodedJWT = this.jwtService.decodeToken(accessToken);
      const tokenExpired = this.jwtService.isTokenExpired(decodedJWT);
      if (!tokenExpired) this.setAuthentication(true);
      if (decodedJWT.exp < decodedJWT.iat) this.setAuthentication(false);
    }
  }
}
