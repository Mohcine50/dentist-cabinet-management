package com.shegami.dentistmanagement.models.auth;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponse {
    private String message;
    private String accessToken;
}
