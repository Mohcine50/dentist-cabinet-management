package com.shegami.dentistmanagement.services.profile;

import com.shegami.dentistmanagement.entities.Profile;
import com.shegami.dentistmanagement.repositories.profile.ProfileRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;
    @Override
    public Profile createProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    @Override
    public String deleteProfileById(String id) {
        profileRepository.deleteById(id);
        return id;
    }

    @Override
    public Profile updateProfile(Profile profile) {
        return profileRepository.save(profile);
    }
}
