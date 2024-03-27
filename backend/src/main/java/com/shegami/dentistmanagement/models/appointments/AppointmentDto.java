package com.shegami.dentistmanagement.models.appointments;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

/**
 * DTO for {@link com.shegami.dentistmanagement.entities.Appointment}
 */
@AllArgsConstructor
@Data
public class AppointmentDto implements Serializable {
    private final LocalDate date;
    private final LocalTime startTime;
    private final AppointmentStatus status;
    private final String notes;
    private final String treatment;
    private final String patient;
}