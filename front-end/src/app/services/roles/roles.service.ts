import { Injectable } from '@angular/core';
import {
  DemLoadAllRolesGQL,
  DemLoadAllRolesQuery,
} from '../../data-access/generated/generated';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor(private demLoadAllRolesGQL: DemLoadAllRolesGQL) {}

  loadAllRoles(): Observable<DemLoadAllRolesQuery['loadAllRoles']> {
    return this.demLoadAllRolesGQL
      .fetch()
      .pipe(map((res) => res.data.loadAllRoles));
  }
}
