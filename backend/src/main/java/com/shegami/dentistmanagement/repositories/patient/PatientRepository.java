package com.shegami.dentistmanagement.repositories.patient;

import com.shegami.dentistmanagement.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, String> {
}
