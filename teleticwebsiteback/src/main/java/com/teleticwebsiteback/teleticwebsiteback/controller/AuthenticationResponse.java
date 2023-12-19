package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
//    private String token;

  @JsonProperty("token")
    private String token;
    @JsonProperty("newRefreshToken")
    private String newRefreshToken;
}
