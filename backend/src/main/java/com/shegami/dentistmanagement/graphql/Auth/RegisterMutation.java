package com.shegami.dentistmanagement.graphql.Auth;

import com.shegami.dentistmanagement.entities.AppUser;
import com.shegami.dentistmanagement.models.auth.RegisterAuthManager;
import com.shegami.dentistmanagement.services.auth.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class RegisterMutation {


    private final AccountService accountService;


    @MutationMapping
    public AppUser  addStaffMember(@Argument RegisterAuthManager registerAuthManager) {


        AppUser newUser = AppUser.builder()
                .email(registerAuthManager.getEmail())
                .username(registerAuthManager.getUsername())
                .password(registerAuthManager.getPassword())
                .build();

        AppUser createdUser = accountService.addNewUser(newUser);
        if (createdUser != null) return createdUser;

        return null;
    }

}
