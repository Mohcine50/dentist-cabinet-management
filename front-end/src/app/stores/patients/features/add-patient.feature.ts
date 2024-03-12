import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { inject } from '@angular/core';
import { PatientService } from '../../../services/patients/patient.service';

export function withAddPatient() {
  return signalStoreFeature(
    withMethods((state, patientService = inject(PatientService)) => ({
      addPatient() {
        patientService.addNewPatient().subscribe((patient) => {
          patchState(state, (state: any) => ({
            patients: [...state.patients, patient],
          }));
        });
      },
    }))
  );
}
