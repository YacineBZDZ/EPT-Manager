package com.teleticwebsiteback.teleticwebsiteback.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@IdClass(MonitorPK.class)
public class Monitor {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    private int id;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID_USERS")
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
        Monitor monitor = (Monitor) o;
        return id == monitor.id && idUsers == monitor.idUsers;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, idUsers);
    }
}
