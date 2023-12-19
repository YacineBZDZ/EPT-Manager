package com.teleticwebsiteback.teleticwebsiteback.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.teleticwebsiteback.teleticwebsiteback.controller.AuthenticationRequest;
import com.teleticwebsiteback.teleticwebsiteback.controller.AuthenticationResponse;
import com.teleticwebsiteback.teleticwebsiteback.controller.RegisterRequest;
import com.teleticwebsiteback.teleticwebsiteback.model.Role;
import com.teleticwebsiteback.teleticwebsiteback.model.Users;
import com.teleticwebsiteback.teleticwebsiteback.repo.UsersRepo;
import io.jsonwebtoken.io.IOException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final UsersRepo repository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;
    public AuthenticationResponse register(RegisterRequest request) {

        var user = Users.builder()
                .name(request.getName())
                .surname(request.getSurname())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .address(request.getAddress())
                .typeUserStr(request.getTypeUserStr())
                .password (passwordEncoder.encode(request.getPassword()))
                .role (Role.USER)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder ()
                .token (jwtToken)
                .build();
    }
    public AuthenticationResponse update(Long id, RegisterRequest request) {
        Optional<Users> User = repository.findUsersById(id);
        if (User.isPresent()) {
            Users user =User.get();
            user.setName(request.getName());
            user.setSurname(request.getSurname());
            user.setEmail(request.getEmail());
            user.setPhoneNumber(request.getPhoneNumber());
            user.setAddress(request.getAddress());
            user.setTypeUserStr(request.getTypeUserStr());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setRole(request.getRole());
            repository.save(user);
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

          /*  String jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();*/
            return new AuthenticationResponse();
        } else {
            throw new IllegalArgumentException("User not found with ID: " + id);
        }
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        var authResponse = jwtService.generateRefreshToken(user);




        return AuthenticationResponse.builder()
                .token(jwtToken)
                .newRefreshToken(authResponse)
                .build();

    }
/*    public ResponseEntity<String> currentUser(String email, String password) {

        AuthenticationRequest request = new AuthenticationRequest();
        request.setEmail(email);
        request.setPassword(password);

        AuthenticationResponse authResponse = authenticate(request);
        String newToken = authResponse.getToken();
        Map<String, String> passwordRequest = new HashMap<>();
        passwordRequest.put("email", email);
        passwordRequest.put("oldPassword", password);
        passwordRequest.put("newPassword", "");  // Set an empty string as the new password

        return userService.changePassword(passwordRequest);
    }*/



}
