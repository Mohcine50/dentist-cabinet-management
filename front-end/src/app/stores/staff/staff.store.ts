import { signalStore, withMethods, withState, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { StaffService } from '../../services/staff/staff.service';

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
  withMethods((state, staffService = inject(StaffService)) => ({
    loadStaffMembers(): void {
      patchState(state, () => ({ loading: true }));
      staffService.loadAllStaffMembers().subscribe((value) => {
        patchState(state, () => ({ loading: false, staff: value }));
      });
    },
    addStaffMember(): void {
      patchState(state, (state: any) => ({
        loading: false,
        staff: [
          ...state.staff,
          {
            name: 'mohcine',
            address: 'zemamra',
            cinNumber: 'MD8J3E',
            phoneNumber: '+2126728928',
          },
        ],
      }));
    },
  })),
  withState(initialState)
);
