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

export function withLoadAllStaff() {
  return signalStoreFeature(
    withMethods((state, staffService = inject(StaffService)) => ({
      loadStaffMembers(): void {
        patchState(state, () => ({ loading: true }));
        staffService.loadAllStaffMembers().subscribe((value) => {
          patchState(state, () => ({ loading: false, staff: value }));
        });
      },
    }))
  );
}
