package com.shegami.dentistmanagement.models.patients;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;


@AllArgsConstructor
@Getter
public class PatientDto implements Serializable {
    private final String fullName;
    private final String bio;
    private final String address;
    private final String city;
    private final String cinNumber;
    private final String phoneNumber;
    private final String gender;
    private final String otherPhoneNumber;
    private final String treatment;
}