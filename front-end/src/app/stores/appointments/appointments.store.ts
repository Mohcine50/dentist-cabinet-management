import { signalStore, withMethods, withState, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { StaffService } from '../../services/staff/staff.service';
import { withAddAppointment } from './features/add-appointment.feature';
import { withLoadAllAppointment } from './features/load-all-appointment';

interface AppointmentsState {
  appointments: any[];
  loading: boolean;
}

const initialState: AppointmentsState = {
  appointments: [],
  loading: false,
};

export const AppointmentsStore = signalStore(
  { providedIn: 'root' },
  withAddAppointment(),
  withLoadAllAppointment(),
  withState(initialState)
);
