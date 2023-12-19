package com.teleticwebsiteback.teleticwebsiteback.config;


import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.SecurityBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;

import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
//@CrossOrigin("*")
public class SecurityConfiguration  {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final  AuthenticationProvider authenticationprovider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
        .csrf()
        .disable()
        .authorizeHttpRequests()
        .requestMatchers("/api/v1/auth/**","/api/v1/user/**","/api/v1/user/forgotpassword")
        .permitAll()
        .anyRequest()
        .authenticated()
        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .authenticationProvider(authenticationprovider)
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
 /*       http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(STATELESS);
        http.authorizeRequests().requestMatchers("/api/v1/auth/**").permitAll();
        http.authorizeRequests ().requestMatchers (GET,  "/api/v1/user/**");
        http.authorizeRequests().requestMatchers (POST, "/api/v1/user/**");
        http.authorizeRequests().anyRequest().authenticated();
       http.authenticationProvider(authenticationprovider).addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);*/
        return http.build();

    }

}
