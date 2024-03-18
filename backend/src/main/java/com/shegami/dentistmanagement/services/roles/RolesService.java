package com.shegami.dentistmanagement.services.roles;

import com.shegami.dentistmanagement.entities.Role;
import com.shegami.dentistmanagement.models.user.RoleEnum;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;



public interface RolesService {

    List<Role> loadAllRoles();
    Role addNewRole(Role role);

    Role getRoleById(String id);
    Role getRoleByName(RoleEnum roleName);


}
