package com.teleticwebsiteback.teleticwebsiteback.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.util.Objects;

public class MonitorPK implements Serializable {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "ID_USERS")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUsers;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdUsers() {
        return idUsers;
    }

    public void setIdUsers(int idUsers) {
        this.idUsers = idUsers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MonitorPK monitorPK = (MonitorPK) o;
        return id == monitorPK.id && idUsers == monitorPK.idUsers;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, idUsers);
    }
}
