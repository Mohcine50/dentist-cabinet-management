package com.shegami.dentistmanagement.graphql.appointments;

import com.shegami.dentistmanagement.entities.Appointment;
import com.shegami.dentistmanagement.entities.Patient;
import com.shegami.dentistmanagement.services.appointment.AppointmentService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;


@Controller
@AllArgsConstructor
public class AppointmentsQuery {
    private final AppointmentService appointmentService;
    @QueryMapping
    public List<Appointment> loadAllAppointments(){
        return appointmentService.listAllAppointment();
    }
}
