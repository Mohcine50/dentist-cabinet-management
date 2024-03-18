package com.shegami.dentistmanagement.services.roles;

import com.shegami.dentistmanagement.entities.Role;
import com.shegami.dentistmanagement.exceptions.ApiRequestException;
import com.shegami.dentistmanagement.models.user.RoleEnum;
import com.shegami.dentistmanagement.repositories.roles.RoleRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class RolesServiceImpl implements RolesService {

    private final RoleRepository roleRepository;


    @Override
    public Role getRoleById(String id){
        return roleRepository.findRoleById(id);
    }

    @Override
    public Role getRoleByName(RoleEnum roleName){
        return roleRepository.findByName(roleName);
    }

    @Override
    public List<Role> loadAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role addNewRole(Role role) {

        Role role1 = roleRepository.findByName(role.getName());
        if (role1 != null) {
            throw new ApiRequestException("Role Already exist");
        }

        Role newRole = Role.builder()
                .name(role.getName())
                .build();


        roleRepository.save(newRole);

        return newRole;
    }



}
