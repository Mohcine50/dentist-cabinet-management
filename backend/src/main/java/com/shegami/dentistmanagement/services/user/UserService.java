package com.shegami.dentistmanagement.services.user;

import com.shegami.dentistmanagement.entities.AppUser;
import com.shegami.dentistmanagement.models.user.RoleEnum;

import java.util.List;

public interface UserService {
    AppUser addNewUser(AppUser appUser);

    AppUser getUserById(String id);

    AppUser getUserByUsername(String username);


    void addRoleToUser(String username, RoleEnum roleName);


    void deleteRoleFromUser(String username, RoleEnum roleName);

    AppUser loadUserByUsername(String username);

    List<AppUser> listAllUsers();

    void deleteRole(String id);

    void deleteUser(String id);
}
