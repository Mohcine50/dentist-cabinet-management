package com.shegami.dentistmanagement.repositories.profile;

import com.shegami.dentistmanagement.entities.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, String> {
}