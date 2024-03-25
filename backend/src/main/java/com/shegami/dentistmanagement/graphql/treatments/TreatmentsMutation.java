package com.shegami.dentistmanagement.graphql.treatments;

import com.shegami.dentistmanagement.entities.AppUser;
import com.shegami.dentistmanagement.entities.Treatment;
import com.shegami.dentistmanagement.models.treatments.TreatmentDto;
import com.shegami.dentistmanagement.services.user.UserService;
import com.shegami.dentistmanagement.services.treatments.TreatmentService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class TreatmentsMutation {

    private final TreatmentService treatmentService;


    @MutationMapping()
    public Treatment addTreatment(@Argument TreatmentDto treatmentData){


        Treatment treatment = Treatment.builder()
                .price(treatmentData.getPrice())
                .name(treatmentData.getName())
                .sessions(treatmentData.getSessions())
                .duration(treatmentData.getDuration())
                .build();

        return treatmentService.addTreatment(treatment);
    }

    @MutationMapping()
    public String deleteTreatment(@Argument  String id) {
        return treatmentService.deleteTreatmentById(id);
    }

    @MutationMapping()
    public Treatment updateTreatment(@Argument String id) {
        return treatmentService.updateTreatment(id);
    }

}
