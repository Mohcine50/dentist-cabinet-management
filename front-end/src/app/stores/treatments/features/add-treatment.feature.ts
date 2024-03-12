import {
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withMethods,
} from '@ngrx/signals';
import { inject } from '@angular/core';
import { StaffService } from '../../../services/staff/staff.service';
import { TreatmentsService } from '../../../services/treatments/treatments.service';
import { DemAddTreatmentMutationVariables } from '../../../data-access/generated/generated';
import { tap } from 'rxjs';

export function withAddTreatment() {
  return signalStoreFeature(
    withMethods((state, treatmentsService = inject(TreatmentsService)) => ({
      addTreatment(treatmentVars: DemAddTreatmentMutationVariables) {
        patchState(state, (state: any) => ({
          treatments: [...state.treatments, treatmentVars],
        }));
        treatmentsService
          .addTreatment(treatmentVars)
          .pipe(tap(console.log))
          .subscribe((treatment) => {
            patchState(state, (state: any) => ({
              treatments: [...state.treatments, treatment],
            }));
          });
      },
    }))
  );
}
