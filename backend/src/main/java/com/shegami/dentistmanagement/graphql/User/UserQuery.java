package com.shegami.dentistmanagement.graphql.User;

import com.shegami.dentistmanagement.entities.AppUser;
import com.shegami.dentistmanagement.services.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Controller
public class UserQuery {

    private final UserService userService;

    @QueryMapping()
    public List<AppUser> loadAllStaffMembers(){

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        List<AppUser> appUsers = userService.listAllUsers();
        return appUsers.stream().filter(appUser -> !appUser.getUsername().equals(username)).collect(Collectors.toList());
    }


}
