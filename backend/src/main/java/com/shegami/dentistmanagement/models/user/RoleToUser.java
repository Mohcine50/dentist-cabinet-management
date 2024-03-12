package com.shegami.dentistmanagement.models.user;

import lombok.Data;

@Data
public class RoleToUser {

    private String username;
    private RoleEnum role;
}
