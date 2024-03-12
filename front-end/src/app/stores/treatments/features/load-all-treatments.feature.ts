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

export function withLoadAllTreatments() {
  return signalStoreFeature(
    withMethods((store, treatmentsService = inject(TreatmentsService)) => ({
      loadAll() {
        treatmentsService.loadAllTreatments().subscribe((treatments) => {
          patchState(store, (state: any) => ({
            treatments,
          }));
        });
      },
    }))
  );
}
