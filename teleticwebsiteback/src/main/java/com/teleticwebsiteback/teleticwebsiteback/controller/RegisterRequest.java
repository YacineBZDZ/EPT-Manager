package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.teleticwebsiteback.teleticwebsiteback.model.Role;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    @Id
    private int id;
     String name;
    private String surname;
    private int phoneNumber;
    private String email;
    private String address;
     String typeUserStr;
    private int typeUser;
    private String password;
    private Role role;
}
