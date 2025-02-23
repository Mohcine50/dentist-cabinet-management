import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { delay, map } from 'rxjs';
import {
  DemAddPatientGQL,
  DemAddPatientMutation,
  DemAddPatientMutationVariables,
  DemAddTreatmentMutation,
  DemLoadAllPatientsGQL,
  DemLoadAllTreatmentsQuery,
} from '../../data-access/generated/generated';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(
    private addPatientMutation: DemAddPatientGQL,
    private loadAllPatientsQuery: DemLoadAllPatientsGQL
  ) {}

  addNewPatient(
    patient: DemAddPatientMutationVariables
  ): Observable<DemAddPatientMutation['addPatient']> {
    return this.addPatientMutation
      .mutate(patient)
      .pipe(
        map(
          (res) => res.data?.addPatient as DemAddPatientMutation['addPatient']
        )
      );
  }

  loadAllPatients(): Observable<
    DemLoadAllTreatmentsQuery['loadAllTreatments']
  > {
    return this.loadAllPatientsQuery
      .fetch()
      .pipe(
        map(
          (res) =>
            res.data
              .loadAllPatients as DemLoadAllTreatmentsQuery['loadAllTreatments']
        )
      );
  }
}
