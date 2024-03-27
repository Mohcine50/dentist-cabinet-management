package com.shegami.dentistmanagement.graphql.appointments;


import com.shegami.dentistmanagement.entities.Appointment;
import com.shegami.dentistmanagement.entities.Patient;
import com.shegami.dentistmanagement.entities.Treatment;
import com.shegami.dentistmanagement.models.appointments.AppointmentDto;
import com.shegami.dentistmanagement.services.appointment.AppointmentService;
import com.shegami.dentistmanagement.services.patient.PatientService;
import com.shegami.dentistmanagement.services.treatments.TreatmentService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class AppointmentsMutation {

    private final AppointmentService appointmentService;
    private final PatientService patientService;
    private final TreatmentService treatmentService;
    @MutationMapping()
    public Appointment addAppointment(@Argument AppointmentDto appointment){

        Patient patient = patientService.getPatientById(appointment.getPatient());
        Treatment treatment = treatmentService.getTreatmentById(appointment.getTreatment());

        Appointment appointment1 = Appointment.builder()
                .notes(appointment.getNotes())
                .date(appointment.getDate())
                .startTime(appointment.getStartTime())
                .status(appointment.getStatus())
                .patient(patient)
                .treatment(treatment)
                .build();

        return appointmentService.addAppointment(appointment1);
    }
}
