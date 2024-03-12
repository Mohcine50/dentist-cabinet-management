import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor() {}

  loadAllStaffMembers(): Observable<any> {
    return of([
      {
        name: 'mohcine',
        address: 'zemamra',
        cinNumber: 'MD8J3E',
        phoneNumber: '+2126728928',
      },
      {
        name: 'mohamed',
        address: 'zemamra',
        cinNumber: 'MD8SXE',
        phoneNumber: '+2126728928',
      },
      {
        name: 'rachid',
        address: 'zemamra',
        cinNumber: 'MD8J3E',
        phoneNumber: '+2126728928',
      },
    ]);
  }
}
