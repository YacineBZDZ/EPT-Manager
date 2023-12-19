package com.teleticwebsiteback.teleticwebsiteback.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;
@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Store {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    private int id;
    @Basic
    @Column(name = "STORE_NAME")
    private String storeName;
    @Basic
    @Column(name = "STORE_ADDRESS")
    private String storeAddress;


    @Column(name = "STORE_CATEGORIES")
    private String storeCategories;


    public Store(int id) {
        this.id = id;
    }
}
