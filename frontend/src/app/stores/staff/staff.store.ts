import { signalStore, withMethods, withState, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { StaffService } from '../../services/staff/staff.service';
import { withAddStaffMember } from './features/add-staff-member.feature';
import { withLoadAllStaff } from './features/load-all-staff-members.feature';

interface StaffState {
  staff: any[];
  loading: boolean;
}

const initialState: StaffState = {
  staff: [],
  loading: false,
};

export const StaffStore = signalStore(
  { providedIn: 'root' },
  withAddStaffMember(),
  withLoadAllStaff(),
  withState(initialState)
);
