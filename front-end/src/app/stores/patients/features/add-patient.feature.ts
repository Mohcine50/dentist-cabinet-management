import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { inject } from '@angular/core';
import { PatientService } from '../../../services/patients/patient.service';
import {
  DemAddPatientMutation,
  DemAddPatientMutationVariables,
} from '../../../data-access/generated/generated';

export function withAddPatient() {
  return signalStoreFeature(
    withMethods((state, patientService = inject(PatientService)) => ({
      addPatient(patientVar: DemAddPatientMutationVariables) {
        patientService.addNewPatient(patientVar).subscribe((patient) => {
          patchState(state, (state: any) => ({
            patients: [...state.patients, patient],
          }));
        });
      },
    }))
  );
}
