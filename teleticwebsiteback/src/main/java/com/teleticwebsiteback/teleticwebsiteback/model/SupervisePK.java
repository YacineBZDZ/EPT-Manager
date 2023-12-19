package com.teleticwebsiteback.teleticwebsiteback.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.util.Objects;

public class SupervisePK implements Serializable {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "ID_STORE")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
        SupervisePK that = (SupervisePK) o;
        return id == that.id && idStore == that.idStore;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, idStore);
    }
}
