package com.shegami.dentistmanagement.graphql.treatments;


import com.shegami.dentistmanagement.entities.Treatment;
import com.shegami.dentistmanagement.services.treatments.TreatmentService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@AllArgsConstructor
@Controller
public class TreatmentsQuery {

    private final TreatmentService treatmentService;

    @QueryMapping()
    public List<Treatment> loadAllTreatments(){
        return treatmentService.listAllTreatments();
    }

    @QueryMapping()
    public Treatment getTreatmentById(@Argument String id){
        return treatmentService.getTreatmentById(id);
    }

}
