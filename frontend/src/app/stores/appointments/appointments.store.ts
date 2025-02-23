import {
  signalStore,
  withMethods,
  withState,
  patchState,
  withComputed,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { StaffService } from '../../services/staff/staff.service';
import { withAddAppointment } from './features/add-appointment.feature';
import { withLoadAllAppointment } from './features/load-all-appointment';
import { isAfter, isFuture, isPast, parseISO } from 'date-fns';

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
  withState(initialState),
  withComputed(({ appointments }) => ({
    upcoming: computed(() => {
      return appointments().filter((appointment) =>
        isFuture(parseISO(appointment['date']))
      );
    }),
    expired: computed(() => {
      return appointments().filter((appointment) =>
        isPast(parseISO(appointment['date']))
      );
    }),
    canceled: computed(() => {
      return appointments().filter(
        (appointment) => appointment['status'].toLowerCase() === 'canceled'
      );
    }),
  }))
);
