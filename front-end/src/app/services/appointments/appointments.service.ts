import { Injectable } from '@angular/core';
import {
  DemAddAppointmentGQL,
  DemAddAppointmentMutation,
  DemAddAppointmentMutationVariables,
  DemLoadAllAppointmentsGQL,
} from '../../data-access/generated/generated';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  constructor(
    private addAppointmentMutation: DemAddAppointmentGQL,
    private loadAllAppointmentsQuery: DemLoadAllAppointmentsGQL
  ) {}

  addAppointment(appointment: DemAddAppointmentMutationVariables) {
    return this.addAppointmentMutation
      .mutate(appointment)
      .pipe(map((res) => res.data?.addAppointment));
  }

  loadAllAppointment() {
    return this.loadAllAppointmentsQuery
      .fetch(undefined, {
        fetchPolicy: 'no-cache',
      })
      .pipe(map((res) => res.data.loadAllAppointments));
  }
}
