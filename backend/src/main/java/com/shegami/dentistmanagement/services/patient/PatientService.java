package com.shegami.dentistmanagement.services.patient;

import com.shegami.dentistmanagement.entities.Patient;
import com.shegami.dentistmanagement.entities.Treatment;

import java.util.List;

public interface PatientService {
    List<Patient> listAllPatients();

    Patient getPatientById(String id);
    Patient addPatient(Patient patient);

    void deletePatientById(String id);

    Patient updatePatient(Patient patient);
}
