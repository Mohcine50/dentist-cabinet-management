package com.shegami.dentistmanagement.services.treatments;

import com.shegami.dentistmanagement.entities.Treatment;
import com.shegami.dentistmanagement.models.treatments.TreatmentDto;
import com.shegami.dentistmanagement.repositories.treatments.TreatmentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TreatmentServiceImpl implements TreatmentService {

    private final TreatmentRepository treatmentRepository;

    @Override
    public Treatment addTreatment(Treatment treatment) {
        return treatmentRepository.save(treatment);
    }

    @Override
    public List<Treatment> listAllTreatments() {
        return treatmentRepository.findAll();
    }

    @Override
    public Treatment getTreatmentById(String id) {
        return treatmentRepository.findById(id).orElse(null);
    }

    @Override
    public String deleteTreatmentById(String id) {
        treatmentRepository.deleteById(id);
        return id;
    }

    @Override
    public Treatment updateTreatment(String id) {
        return null;
    }
}
