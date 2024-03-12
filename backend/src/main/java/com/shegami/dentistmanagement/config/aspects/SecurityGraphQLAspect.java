package com.shegami.dentistmanagement.config.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.core.annotation.Order;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;


@Aspect
@Component
@Order(1)
public class SecurityGraphQLAspect {

    @Pointcut("within(com.shegami.dentistmanagement.graphql..*)")
    public void allSecuredGraphQLQueries() {}

    @Before("allSecuredGraphQLQueries() && isDefinedInApplication() && !isMethodAnnotatedAsUnsecured()")
    public void secureQuery(JoinPoint joinPoint) throws Throwable {
        if (SecurityContextHolder.getContext() == null ||
                SecurityContextHolder.getContext().getAuthentication() == null ||
                !SecurityContextHolder.getContext().getAuthentication().isAuthenticated() ||
                AnonymousAuthenticationToken.class.isAssignableFrom(SecurityContextHolder.getContext().getAuthentication().getClass())) {
            throw new AccessDeniedException("User not authenticated");
        }
    }

    @Pointcut("within(com.shegami.dentistmanagement..*)")
    private void isDefinedInApplication() {
    }

    @Pointcut("@annotation(com.shegami.dentistmanagement.config.annotation.Unsecured)")
    private void isMethodAnnotatedAsUnsecured() {
    }





}
