package com.shegami.dentistmanagement.graphql.patients;

import com.shegami.dentistmanagement.entities.Patient;
import com.shegami.dentistmanagement.services.patient.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@AllArgsConstructor
public class PatientsQuery {
    private final PatientService patientService;

    @QueryMapping
    public List<Patient> loadAllPatients(){
        return patientService.listAllPatients();
    }
}
