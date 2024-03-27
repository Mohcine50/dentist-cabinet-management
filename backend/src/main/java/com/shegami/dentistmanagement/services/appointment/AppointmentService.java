package com.shegami.dentistmanagement.services.appointment;

import com.shegami.dentistmanagement.entities.Appointment;
import com.shegami.dentistmanagement.entities.Patient;

import java.util.List;

public interface AppointmentService {
    List<Appointment> listAllAppointment();

    Appointment getAppointmentById(String id);
    Appointment addAppointment(Appointment appointment);

    void deleteAppointmentById(String id);

    Appointment updateAppointment(Appointment appointment);
}
