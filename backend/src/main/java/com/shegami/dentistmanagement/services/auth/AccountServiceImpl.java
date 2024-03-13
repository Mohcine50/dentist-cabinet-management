package com.shegami.dentistmanagement.services.auth;

import com.shegami.dentistmanagement.entities.AppUser;
import com.shegami.dentistmanagement.entities.Role;
import com.shegami.dentistmanagement.exceptions.ApiRequestException;
import com.shegami.dentistmanagement.exceptions.NotFoundException;
import com.shegami.dentistmanagement.models.user.RoleEnum;
import com.shegami.dentistmanagement.repositories.users.AppUserRepository;
import com.shegami.dentistmanagement.repositories.roles.RoleRepository;
import com.shegami.dentistmanagement.services.auth.AccountService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Service
@Transactional
@AllArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AppUserRepository appUserRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;


    @Override
    public AppUser addNewUser(AppUser appUser) {


        AppUser user = appUserRepository.findByUsername(appUser.getUsername());
        if (user != null) {
            throw new ApiRequestException("Username Already Exist please try other one");
        }

        Role role = roleRepository.findByName(RoleEnum.USER);

        AppUser newUser = AppUser.builder()
                .username(appUser.getUsername())
                .password(passwordEncoder.encode(appUser.getPassword()))
                .roles(List.of(role))
                .build();


        appUserRepository.save(newUser);


        return newUser;
    }

    @Override
    public AppUser getUserById(String id) {
        AppUser user = appUserRepository.findById(id).orElse(null);

        if (user == null) {
            throw new NotFoundException("No User Found With ID: " + id);
        }

        return user;
    }

    @Override
    public AppUser getUserByUsername(String username) {
        AppUser user = appUserRepository.findByUsername(username);

        if (user == null) {
            throw new NotFoundException("No User Found With Username: " + username);
        }

        return user;
    }



    @Override
    public void addRoleToUser(String username, RoleEnum roleName) {

        AppUser user = appUserRepository.findByUsername(username);
        if (user == null) throw new NotFoundException("User Not Found");
        Role role = roleRepository.findByName(roleName);
        if (role == null) throw new NotFoundException("Role Not Found");


        Collection<Role> roles = user.getRoles();
        if (roles == null) {
            roles = new ArrayList<>(List.of(role));
        } else {
            roles.add(role);
        }

    }



    @Override
    public void deleteRoleFromUser(String username, RoleEnum roleName) {
        AppUser user = appUserRepository.findByUsername(username);
        if (user == null) throw new NotFoundException("User Not Found");
        Role role = roleRepository.findByName(roleName);
        if (role == null) throw new NotFoundException("Role Not Found");


        Collection<Role> roles = user.getRoles();
        roles.remove(role);
    }

    @Override
    public AppUser loadUserByUsername(String username) {
        return appUserRepository.findByUsername(username);
    }

    @Override
    public List<AppUser> listAllUsers() {
        return appUserRepository.findAll();
    }

    @Override
    public void deleteRole(String id) {
        roleRepository.deleteById(id);
    }

    @Override
    public void deleteUser(String id) {
        appUserRepository.deleteById(id);
    }


}
