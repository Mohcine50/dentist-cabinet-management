import {
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withMethods,
} from '@ngrx/signals';
import { inject } from '@angular/core';
import { StaffService } from '../../../services/staff/staff.service';
import { TreatmentsService } from '../../../services/treatments/treatments.service';
import {
  DemAddStaffMemberMutationVariables,
  DemAddTreatmentMutationVariables,
} from '../../../data-access/generated/generated';
import { tap } from 'rxjs';

export function withAddStaffMember() {
  return signalStoreFeature(
    withMethods((state, staffService = inject(StaffService)) => ({
      addStaffMember(staffVars: DemAddStaffMemberMutationVariables) {
        staffService.addStaffMember(staffVars).subscribe((staff) => {
          patchState(state, (state: any) => ({
            staff: [...state.staff, staff],
          }));
        });
      },
    }))
  );
}
