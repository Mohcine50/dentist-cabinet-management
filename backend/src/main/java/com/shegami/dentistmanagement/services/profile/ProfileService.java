package com.shegami.dentistmanagement.services.profile;

import com.shegami.dentistmanagement.entities.Profile;

public interface ProfileService {
     Profile createProfile(Profile profile);
     String deleteProfileById(String id);

     Profile updateProfile(Profile profile);

}
