import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor() {}

  addNewPatient() {
    return of({
      name: 'Jhon',
    }).pipe(delay(5000));
  }

  loadAllPatients() {
    return of([
      {
        name: 'Jhon',
      },
      {
        name: 'Mic',
      },
      {
        name: 'Chaos',
      },
    ]).pipe(delay(5000));
  }
}
