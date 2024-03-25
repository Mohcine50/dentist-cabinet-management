package com.shegami.dentistmanagement;

import com.shegami.dentistmanagement.entities.AppUser;
import com.shegami.dentistmanagement.entities.Role;
import com.shegami.dentistmanagement.models.user.RoleEnum;
import com.shegami.dentistmanagement.services.roles.RolesService;
import com.shegami.dentistmanagement.services.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;


@SpringBootApplication
public class DentistManagementApplication {


	public static void main(String[] args) {
		SpringApplication.run(DentistManagementApplication.class, args);
	}


	//@Bean()
	CommandLineRunner commandLineRunner(UserService accountService, RolesService rolesService, PasswordEncoder passwordEncoder) {

		return args -> {

			rolesService.addNewRole(new Role(null, RoleEnum.ADMIN));
			rolesService.addNewRole(new Role(null, RoleEnum.USER));
			rolesService.addNewRole(new Role(null, RoleEnum.MANAGER));
			rolesService.addNewRole(new Role(null, RoleEnum.STAFF));
			rolesService.addNewRole(new Role(null, RoleEnum.REPORT_VIEWER));
			rolesService.addNewRole(new Role(null, RoleEnum.REPORT_EDITOR));
			rolesService.addNewRole(new Role(null, RoleEnum.APPOINTMENT_EDITOR));
			rolesService.addNewRole(new Role(null, RoleEnum.APPOINTMENT_VIEWER));
			rolesService.addNewRole(new Role(null, RoleEnum.PATIENT_EDITOR));
			rolesService.addNewRole(new Role(null, RoleEnum.PATIENT_VIEWER));
			rolesService.addNewRole(new Role(null, RoleEnum.INVOICE_EDITOR));
			rolesService.addNewRole(new Role(null, RoleEnum.INVOICE_VIEWER));

			accountService.addNewUser(new AppUser(null, "admin", passwordEncoder.encode("123456789"),null,null, false));
			//accountService.addNewUser(new AppUser(null, "user",  passwordEncoder.encode("123456789"), null, null, true));
			//accountService.addNewUser(new AppUser(null, "manager",  passwordEncoder.encode("123456789"), null,null, false));


			accountService.addRoleToUser("admin", RoleEnum.ADMIN);
			//accountService.addRoleToUser("admin", "USER");
			accountService.addRoleToUser("admin", RoleEnum.MANAGER);
			//accountService.addRoleToUser("user", "USER");
			//accountService.addRoleToUser("manager", RoleEnum.MANAGER);
			//accountService.addRoleToUser("manager", "USER");

		};
	}
}
