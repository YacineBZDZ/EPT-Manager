package com.teleticwebsiteback.teleticwebsiteback.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@IdClass(OrederPK.class)
public class Oreder {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    private int id;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID_STORE")
    private int idStore;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdStore() {
        return idStore;
    }

    public void setIdStore(int idStore) {
        this.idStore = idStore;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Oreder oreder = (Oreder) o;
        return id == oreder.id && idStore == oreder.idStore;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, idStore);
    }
}
