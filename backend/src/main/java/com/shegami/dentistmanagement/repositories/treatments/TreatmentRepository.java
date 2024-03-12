package com.shegami.dentistmanagement.repositories.treatments;

import com.shegami.dentistmanagement.entities.Treatment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TreatmentRepository extends JpaRepository<Treatment, String> {
}