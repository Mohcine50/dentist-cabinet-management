package com.shegami.dentistmanagement.controllers;

import com.shegami.dentistmanagement.entities.AppUser;
import com.shegami.dentistmanagement.entities.Role;
import com.shegami.dentistmanagement.models.user.RoleToUser;
import com.shegami.dentistmanagement.services.auth.AccountService;
import com.shegami.dentistmanagement.services.roles.RolesService;
import org.springframework.context.annotation.Lazy;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@EnableWebSecurity
@RequestMapping(path = "/api/users")
public class AccountController {

    private final AccountService accountService;
    private final RolesService roleService;

    public AccountController(@Lazy AccountService accountService, RolesService roleService) {
        this.accountService = accountService;
        this.roleService = roleService;
    }

    @QueryMapping
    public List<AppUser> listAllUsers() {
        System.out.println(accountService.listAllUsers());
        return accountService.listAllUsers();
    }

    @GetMapping("all")
    @ResponseBody
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public List<AppUser> allUsers() {
        return accountService.listAllUsers();
    }

    @GetMapping("id/{id}")
    @ResponseBody
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public ResponseEntity<AppUser> getUserById(@PathVariable("id") String id) {

        AppUser user = accountService.getUserById(id);

        return new ResponseEntity<>(user, HttpStatus.FOUND);
    }


    @GetMapping("username/{username}")
    @ResponseBody
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public ResponseEntity<AppUser> getUserByUsername(@PathVariable("username") String username) {

        AppUser user = accountService.getUserByUsername(username);

        return new ResponseEntity<>(user, HttpStatus.FOUND);
    }

    @PostMapping(path = "/add-user")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<AppUser> addUser(@RequestBody AppUser appUser) {


        AppUser user = accountService.addNewUser(appUser);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete-user/{id}")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<Object> deleteUser(@PathVariable String id) {

        accountService.deleteUser(id);

        return new ResponseEntity<>(Map.of("Message", "User Deleted Successfully"), HttpStatus.OK);
    }

    @PostMapping(path = "/add-role")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<Object> addRole(@RequestBody Role role) {

        Role addedRole = roleService.addNewRole(role);

        return new ResponseEntity<>(addedRole, HttpStatus.OK);
    }

    @PostMapping(path = "/add-role-to-user")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<Object> addRoleToUser(@RequestBody RoleToUser roleToUser) {

        accountService.addRoleToUser(roleToUser.getUsername(), roleToUser.getRole());

        return new ResponseEntity<>(Map.of("Message", "Role added To user Successfully"), HttpStatus.OK);
    }


    @DeleteMapping(path = "/delete-role/{id}")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<Object> deleteRole(@PathVariable String id) {

        accountService.deleteRole(id);

        return new ResponseEntity<>(Map.of("Message", "Role Deleted Successfully"), HttpStatus.OK);
    }



}
