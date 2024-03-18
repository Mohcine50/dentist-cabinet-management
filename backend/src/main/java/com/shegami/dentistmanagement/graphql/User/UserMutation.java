package com.shegami.dentistmanagement.graphql.User;


import com.shegami.dentistmanagement.entities.AppUser;
import com.shegami.dentistmanagement.entities.Profile;
import com.shegami.dentistmanagement.entities.Role;
import com.shegami.dentistmanagement.models.user.RoleEnum;
import com.shegami.dentistmanagement.models.user.staff.StaffDto;
import com.shegami.dentistmanagement.services.profile.ProfileService;
import com.shegami.dentistmanagement.services.roles.RolesService;
import com.shegami.dentistmanagement.services.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Controller
public class UserMutation {

    private final UserService userService;
    private final ProfileService profileService;
    private final RolesService rolesService;
    private final PasswordEncoder passwordEncoder;

    @MutationMapping
    public AppUser addStaffMember(@Argument StaffDto staff){
        System.out.println(staff);

        Profile profile = profileService.createProfile(Profile.builder()
                .fullName(staff.getFullName())
                .cin(staff.getCinNumber())
                .bio(staff.getBio())
                .address(staff.getAddress())
                .email(staff.getEmail())
                .gender(staff.getGender())
                .city(staff.getCity())
                .phoneNumber(staff.getPhoneNumber())
                .otherPhoneNumber(staff.getPhoneNumber())
                .build());

        Role role = rolesService.getRoleById(staff.getRole());

        if(role == null){
            role = rolesService.getRoleByName((RoleEnum.STAFF));
        }
        Role roleUser = rolesService.getRoleByName(RoleEnum.USER);

        String password = "staff_"+staff.getUsername();
        AppUser appUser = userService.addNewUser(AppUser.builder()
                        .username(staff.getUsername())
                        .roles(new ArrayList<>(List.of(role, roleUser)))
                        .password(passwordEncoder.encode(password))
                        .profile(profile)
                        .firstLoginTime(true)
                .build());

        return appUser;
    }

}
