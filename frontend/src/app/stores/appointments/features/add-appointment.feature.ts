import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { inject } from '@angular/core';
import { PatientService } from '../../../services/patients/patient.service';
import {
  DemAddAppointmentMutationVariables,
  DemAddPatientMutation,
  DemAddPatientMutationVariables,
} from '../../../data-access/generated/generated';
import { AppointmentsService } from '../../../services/appointments/appointments.service';

export function withAddAppointment() {
  return signalStoreFeature(
    withMethods((state, appointmentService = inject(AppointmentsService)) => ({
      addAppointment(appointmentVar: DemAddAppointmentMutationVariables) {
        appointmentService
          .addAppointment(appointmentVar)
          .subscribe((appointment) => {
            patchState(state, (state: any) => ({
              appointments: [...state.appointments, appointment],
            }));
          });
      },
    }))
  );
}
