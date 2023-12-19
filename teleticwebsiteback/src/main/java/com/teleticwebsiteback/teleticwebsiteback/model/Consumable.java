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
public class Consumable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    private int id;
    @Basic
    @Column(name = "PRODUCT_NAME")
    private String productName;
    @Basic
    @Column(name = "BRAND_NAME")
    private String brandName;
    @Basic
    @Column(name = "SUPPLIER_INFORMATION")
    private String supplierInformation;
    @Basic
    @Column(name = "QUANTITY")
    private int quantity;
    @Basic
    @Column(name = "COST")
    private int cost;
    @Basic
    @Column(name = "CATEGORY")
    private String category;
    public Consumable(int id) {
        this.id = id;
    }
}
