package com.shegami.dentistmanagement.graphql.Auth;


import com.shegami.dentistmanagement.config.annotation.Unsecured;
import com.shegami.dentistmanagement.entities.AppUser;
import com.shegami.dentistmanagement.exceptions.NotFoundException;
import com.shegami.dentistmanagement.models.auth.LoginResponse;
import com.shegami.dentistmanagement.repositories.users.AppUserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Controller;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.stream.Collectors;

@AllArgsConstructor
@Controller
public class LoginQuery {

    private final JwtEncoder jwtEncoder;
    private final AuthenticationManager authenticationManager;
    private final AppUserRepository appUserRepository;
    private final HttpServletResponse response;
    @QueryMapping
    @Unsecured
    public LoginResponse login(@Argument String username, @Argument String password) {
        Instant instant = Instant.now();
        JwtClaimsSet jwtClaimsSet;
        String jwtAccessToken;
        LoginResponse loginResponse;



        AppUser appUser = appUserRepository.findByUsername(username);
        if (appUser == null) {
            throw new NotFoundException("User Not Found");
        }

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));

            String scope = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(" "));

            jwtClaimsSet = JwtClaimsSet.builder()
                    .subject(authentication.getName())
                    .issuedAt(instant)
                    .expiresAt(instant.plus(24, ChronoUnit.HOURS))
                    .issuer("security-service")
                    .claim("scope", scope)
                    .build();
            jwtAccessToken = jwtEncoder.encode(JwtEncoderParameters.from(jwtClaimsSet)).getTokenValue();

           loginResponse = LoginResponse.builder()
                    .message("Login Successfully")
                   .accessToken(jwtAccessToken)
                    .build();

        } catch (AuthenticationException exception) {
            loginResponse = LoginResponse.builder()
                    .message("Wrong Password")
                    .build();
            return loginResponse;
        }

        Cookie cookie = new Cookie("access_token", jwtAccessToken);
        cookie.setPath("/");
        cookie.setMaxAge(24 * 60 * 60);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        response.addCookie(cookie);
        return loginResponse;
    }

}
