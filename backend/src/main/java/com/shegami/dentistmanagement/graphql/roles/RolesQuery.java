package com.shegami.dentistmanagement.graphql.roles;


import com.shegami.dentistmanagement.entities.Role;
import com.shegami.dentistmanagement.services.roles.RolesService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@AllArgsConstructor
@Controller
public class RolesQuery {
    private final RolesService rolesService;

    @QueryMapping()
    public List<Role> loadAllRoles(){
        return  rolesService.loadAllRoles();
    }
}
