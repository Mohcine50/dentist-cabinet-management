package com.shegami.dentistmanagement.models.user.staff;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class StaffDto {
    private String fullName;
    private String username;
    private String bio;
    private String phoneNumber;
    private String gender;
    private String address;
    private String city;
    private String otherPhoneNumber;
    private String cinNumber;
    private String email;
    private String role;
}
