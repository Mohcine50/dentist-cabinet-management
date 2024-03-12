package com.shegami.dentistmanagement.services.treatments;

import com.shegami.dentistmanagement.entities.Treatment;
import com.shegami.dentistmanagement.models.treatments.TreatmentDto;

import java.util.List;

public interface TreatmentService {

    Treatment addTreatment(Treatment treatment);

    List<Treatment> listAllTreatments();

    Treatment getTreatmentById(String id);

    String deleteTreatmentById(String id);

    Treatment updateTreatment(String id);


}
