import { signalStore, withMethods, withState, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { StaffService } from '../../services/staff/staff.service';

interface AppointmentsState {
  staff: any[];
  loading: boolean;
}

const initialState: AppointmentsState = {
  staff: [],
  loading: false,
};

export const AppointmentsStore = signalStore(
  { providedIn: 'root' },
  withMethods((state, staffService = inject(StaffService)) => ({})),
  withState(initialState)
);
