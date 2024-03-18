package com.shegami.dentistmanagement.graphql.User;

import com.shegami.dentistmanagement.services.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;

@AllArgsConstructor
@Controller
public class UserQuery {

    private final UserService userService;


}
