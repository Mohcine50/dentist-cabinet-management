import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { inject } from '@angular/core';
import { PatientService } from '../../../services/patients/patient.service';
import { AppointmentsService } from '../../../services/appointments/appointments.service';

export function withLoadAllAppointment() {
  return signalStoreFeature(
    withMethods((state, appointmentService = inject(AppointmentsService)) => ({
      loadAllAppointments() {
        appointmentService.loadAllAppointment().subscribe((appointments) => {
          patchState(state, { appointments });
        });
      },
    }))
  );
}
