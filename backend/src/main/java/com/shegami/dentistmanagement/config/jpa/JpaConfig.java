package com.shegami.dentistmanagement.config.jpa;

import com.shegami.dentistmanagement.entities.AppUser;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;


@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@AllArgsConstructor
public class JpaConfig {

    private final AuditorAware<?> auditorAware;

    @Bean
    public AuditorAware<?> auditorAware() {
        return auditorAware;
    }
}
