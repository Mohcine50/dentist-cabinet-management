package com.shegami.dentistmanagement.repositories.roles;

import com.shegami.dentistmanagement.entities.Role;
import com.shegami.dentistmanagement.models.user.RoleEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface RoleRepository extends JpaRepository<Role, String> {

    Role findByName(RoleEnum name);
    Role findRoleById(String id);
}
