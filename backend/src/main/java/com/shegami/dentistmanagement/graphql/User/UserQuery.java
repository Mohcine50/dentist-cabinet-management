package com.shegami.dentistmanagement.graphql.User;

import com.shegami.dentistmanagement.services.auth.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@AllArgsConstructor
@Controller
public class UserQuery {

    private final AccountService accountService;
    @QueryMapping
    public String securedResource() {
        return "Secured resource";
    }




}
