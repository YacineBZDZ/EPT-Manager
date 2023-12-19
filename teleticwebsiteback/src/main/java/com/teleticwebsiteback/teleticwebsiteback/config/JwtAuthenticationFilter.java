package com.teleticwebsiteback.teleticwebsiteback.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.teleticwebsiteback.teleticwebsiteback.controller.AuthenticationResponse;
import com.teleticwebsiteback.teleticwebsiteback.model.Users;
import com.teleticwebsiteback.teleticwebsiteback.repo.UsersRepo;
import com.teleticwebsiteback.teleticwebsiteback.service.JwtService;
import com.teleticwebsiteback.teleticwebsiteback.service.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private Users users;
    private final  UserDetailsService userDetailsService;
    private final UsersRepo repository;
    private final JwtService jwtService;
    private final UserService userService;
    @Override
    protected void doFilterInternal(
                                   @NonNull HttpServletRequest request,
                                   @NonNull HttpServletResponse response,
                                   @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
    /*    if (request.getServletPath().contains("/api/v1/auth")) {
            filterChain.doFilter(request, response);
            return;
        }*/
final String authHeader = request.getHeader("Authorization");
final String jwt;
final String userEmail;
if (authHeader == null ||!authHeader.startsWith("Bearer ")){
    filterChain.doFilter(request, response);
    return;
}
jwt = authHeader.substring(7);
   userEmail = jwtService.extractUsername(jwt) ;
   if( userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null){
       UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
       if (jwtService.isTokenValid(jwt, userDetails)){

           UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                   userDetails,
                   null
                   ,userDetails.getAuthorities()
           );
           authToken.setDetails(
                   new WebAuthenticationDetailsSource().buildDetails(request)
           );
           SecurityContextHolder.getContext().setAuthentication(authToken);


       }

   }
filterChain.doFilter(request, response );
    }

    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws io.jsonwebtoken.io.IOException, java.io.IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }

        refreshToken = authHeader.substring(7);
        userEmail = jwtService.extractUsername(refreshToken);

        if (userEmail != null) {
            var user = this.repository.findByEmail(userEmail).orElseThrow();

            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
                var authResponse = AuthenticationResponse.builder()
                        .token(accessToken)
                        .newRefreshToken(refreshToken)
                        .build();


                response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getWriter(), authResponse);
            }
        }
    }



}
