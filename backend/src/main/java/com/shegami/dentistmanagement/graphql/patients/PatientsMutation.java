package com.shegami.dentistmanagement.graphql.patients;

import com.shegami.dentistmanagement.entities.Patient;
import com.shegami.dentistmanagement.entities.Treatment;
import com.shegami.dentistmanagement.models.patients.PatientDto;
import com.shegami.dentistmanagement.services.patient.PatientService;
import com.shegami.dentistmanagement.services.treatments.TreatmentService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Controller
@AllArgsConstructor
public class PatientsMutation {

    private final PatientService patientService;

    @MutationMapping()
    public Patient addPatient(@Argument PatientDto patient){


        Patient newPatient = Patient.builder()
                .cinNumber(patient.getCinNumber())
                .bio(patient.getBio())
                .address(patient.getAddress())
                .city(patient.getCity())
                .gender(patient.getGender())
                .fullName(patient.getFullName())
                .otherPhoneNumber(patient.getOtherPhoneNumber())
                .phoneNumber(patient.getOtherPhoneNumber())
                .treatments(null)
                .build();

    return patientService.addPatient(newPatient);
    }

}
