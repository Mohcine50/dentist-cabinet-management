package com.shegami.dentistmanagement.repositories.users;

import com.shegami.dentistmanagement.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository<AppUser, String> {

    AppUser findByUsername(String username);

}
