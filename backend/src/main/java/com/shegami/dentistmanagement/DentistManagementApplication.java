package com.shegami.dentistmanagement;

import com.shegami.dentistmanagement.models.user.RoleEnum;
import com.shegami.dentistmanagement.services.auth.AccountService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;


@SpringBootApplication
@EnableJpaAuditing
public class DentistManagementApplication {


	public static void main(String[] args) {
		SpringApplication.run(DentistManagementApplication.class, args);
	}


	//@Bean()
	CommandLineRunner commandLineRunner(AccountService accountService) {

		return args -> {

			//accountService.addNewRole(new Role(null, RoleEnum.ADMIN));
			//accountService.addNewRole(new Role(null, RoleEnum.USER));
			//accountService.addNewRole(new Role(null, RoleEnum.MANAGER));
			//accountService.addNewRole(new Role(null, RoleEnum.STAFF));
			//accountService.addNewRole(new Role(null, RoleEnum.REPORT_VIEWER));
			//accountService.addNewRole(new Role(null, RoleEnum.REPORT_EDITOR));
			//accountService.addNewRole(new Role(null, RoleEnum.APPOINTMENT_EDITOR));
			//accountService.addNewRole(new Role(null, RoleEnum.APPOINTMENT_VIEWER));
			//accountService.addNewRole(new Role(null, RoleEnum.PATIENT_EDITOR));
			//accountService.addNewRole(new Role(null, RoleEnum.PATIENT_VIEWER));
			//accountService.addNewRole(new Role(null, RoleEnum.INVOICE_EDITOR));
			//accountService.addNewRole(new Role(null, RoleEnum.INVOICE_VIEWER));

			//accountService.addNewUser(new AppUser(null, "admin", "admin@gmail.com", "123456789", null));
			//accountService.addNewUser(new AppUser(null, "user", "user@gmail.com", "123456789", null));
			//accountService.addNewUser(new AppUser(null, "manager", "manager@gmail.com", "123456789", null));


			accountService.addRoleToUser("admin", RoleEnum.ADMIN);
			//accountService.addRoleToUser("admin", "USER");
			accountService.addRoleToUser("admin", RoleEnum.MANAGER);
			//accountService.addRoleToUser("user", "USER");
			accountService.addRoleToUser("manager", RoleEnum.MANAGER);
			//accountService.addRoleToUser("manager", "USER");

		};
	}
}
