package com.shegami.dentistmanagement.config.security;


import com.nimbusds.jose.shaded.gson.JsonObject;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.stereotype.Component;

import java.io.*;
import java.time.Instant;

import static com.shegami.dentistmanagement.Utils.RequestManagement.resolveToken;
import static com.shegami.dentistmanagement.Utils.RequestManagement.writeResponse;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private final JwtDecoder jwtDecoder;
    private final UserDetailsService userDetailsService;
    private final AuthenticationManager authenticationManager;
    public JwtAuthorizationFilter(JwtDecoder jwtDecoder, UserDetailsService userDetailsService,
                                  AuthenticationManager authenticationManager) {
        super(authenticationManager);
        this.userDetailsService = userDetailsService;
        this.authenticationManager= authenticationManager;
        this.jwtDecoder = jwtDecoder;

    }


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


        String jwtToken;
        boolean tokenExpired;
        Instant issuerAt, expiredAt;
        String requestedURI;
        JsonObject jsonObject = new JsonObject();

        requestedURI = request.getRequestURI();

        /**if (requestedURI.contains("/api/auth/") || requestedURI.contains("/v3/api-docs") || requestedURI.contains("/swagger-ui/") || requestedURI.contains("/graphiql")) {

            filterChain.doFilter(request, response);
            return;
        }*/


        jwtToken = resolveToken(request);


        if (jwtToken == null) {
            jsonObject.addProperty("Message", "NO TOKEN PROVIDED");
            writeResponse(response, HttpServletResponse.SC_UNAUTHORIZED, jsonObject);
            return;
        }

        try {
            Jwt jwt = jwtDecoder.decode(jwtToken);

            UserDetails userDetails = userDetailsService.loadUserByUsername(jwt.getSubject());

            if (userDetails == null) {
                jsonObject.addProperty("Message", "NO USER WITH THIS USERNAME");
                writeResponse(response, HttpServletResponse.SC_UNAUTHORIZED, jsonObject);
                return;
            }


            issuerAt = jwt.getIssuedAt();
            expiredAt = jwt.getExpiresAt();

            tokenExpired = issuerAt.isBefore(expiredAt);

            if (!tokenExpired) {
                jsonObject.addProperty("Message", "Token expired");
                writeResponse(response, HttpServletResponse.SC_FORBIDDEN, jsonObject);
                return;
            }

            filterChain.doFilter(request, response);

        } catch (JwtException exception) {
            jsonObject.addProperty("Message", "INVALID TOKEN");
            writeResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, jsonObject);
        }

    }


}


