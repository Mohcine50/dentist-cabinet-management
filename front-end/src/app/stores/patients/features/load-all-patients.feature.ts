import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { inject } from '@angular/core';
import { PatientService } from '../../../services/patients/patient.service';

export function withLoadAllPatients() {
  return signalStoreFeature(
    withMethods((state, patientService = inject(PatientService)) => ({
      loadAllPatients() {
        patientService.loadAllPatients().subscribe((patients) => {
          patchState(state, { patients });
        });
      },
    }))
  );
}
