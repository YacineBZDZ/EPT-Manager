package com.teleticwebsiteback.teleticwebsiteback.service;

import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface UserServiceImpl {
    ResponseEntity<String> forgotPassword(Map<String, String> request);

}
