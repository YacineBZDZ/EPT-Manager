package com.teleticwebsiteback.teleticwebsiteback.controller;


import com.teleticwebsiteback.teleticwebsiteback.service.AuthenticationService;

import java.io.IOException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PutMapping("/update/{id}")
//    @PreAuthorize("hasAuthority('admin:update')")
    public ResponseEntity<AuthenticationResponse> updateRegister(
            @PathVariable("id") Long id,
            @RequestBody RegisterRequest request
    ) {
        AuthenticationResponse response = service.update(id, request);
        return ResponseEntity.ok(response);
    }
  /*  @PutMapping("/update")
    public ResponseEntity<AuthenticationResponse> updateRegister(
            @RequestBody RegisterRequest request, @PathVariable Long idUser
    ) {

        return ResponseEntity.ok(service.update(idUser));
    }*/

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request

    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
    /*@PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) {}*//*throws IOException {
        service.refreshToken(request, response);
        // If the response header does not contain a refresh token, return an error response
        if (response.getHeader(HttpHeaders.AUTHORIZATION) == null) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid refresh token");
        }
    }*/

}
