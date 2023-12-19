package com.teleticwebsiteback.teleticwebsiteback.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

import static jakarta.persistence.FetchType.EAGER;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = " users")
public class Users implements UserDetails {
    @GeneratedValue
    @Id
    @Column(name = "ID")
    private int id;
    @Basic
    @Column(name = "NAME")
    private String name;
    @Basic
    @Column(name = "SURNAME")
    private String surname;
    @Basic
    @Column(name = "PHONE_NUMBER")
    private int phoneNumber;
    @Basic
    @Column(name = "EMAIL")
    private String email;
    @Basic
    @Column(name = "ADDRESS")
    private String address;

    @Basic
    @Column(name = "TYPE_USER")
    private String typeUserStr;
    @Basic
    @Column(name = "Password")
    private String password;

    @Enumerated(EnumType.STRING)
private Role role;
/*    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));    // how many roles the  user can have
    }*/




    public void setTypeUserStr(String typeUserStr) {
        this.typeUserStr = typeUserStr;
    }



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

/*    @ManyToMany(fetch = EAGER)
    private    Collection<Role> roles = new ArrayList<>();*/

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setPassword(String password) {
        this.password = password;
    }



}
