package com.teleticwebsiteback.teleticwebsiteback.model;

//import com.teleticwebsiteback.teleticwebsiteback.model.Permission;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

//import static com.teleticwebsiteback.teleticwebsiteback.model.Permission.*;


@RequiredArgsConstructor
public enum Role {
USER,
    ADMIN
}