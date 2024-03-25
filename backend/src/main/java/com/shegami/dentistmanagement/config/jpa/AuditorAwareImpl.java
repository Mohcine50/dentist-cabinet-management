package com.shegami.dentistmanagement.config.jpa;

import com.shegami.dentistmanagement.entities.AppUser;
import com.shegami.dentistmanagement.services.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Optional;


@Component
@AllArgsConstructor
@Primary
public class AuditorAwareImpl implements AuditorAware<AppUser> {

    private final UserService userService;

    @Override
    public Optional<AppUser> getCurrentAuditor() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }

        return Optional.of(userService.loadUserByUsername(authentication.getName()));
    }
}
