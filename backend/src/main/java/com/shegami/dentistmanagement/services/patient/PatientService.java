package com.shegami.dentistmanagement.services.patient;

import com.shegami.dentistmanagement.entities.Patient;
import com.shegami.dentistmanagement.entities.Treatment;

import java.util.List;

public interface PatientService {
    List<Patient> listAllTreatments();

    Treatment getTreatmentById(String id);

    Treatment deleteTreatmentById(String id);

    Treatment updateTreatment(String id);
}
