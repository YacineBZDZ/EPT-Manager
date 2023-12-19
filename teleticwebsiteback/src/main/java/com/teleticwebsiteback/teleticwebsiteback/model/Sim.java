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
public class  Sim {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    private int id;
    @Basic
    @Column(name = "IMSI")
    private int imsi;
    @Basic
    @Column(name = "PHONE_NUMBER")
    private int phoneNumber;
    @Basic
    @Column(name = "TYPE")
    private String type;
    @Basic
    @Column(name = "SERVICE_PROVIDER")
    private String serviceProvider;
    @Basic
    @Column(name = "SUBSCRIPTION")
    private String subscription;
    @Basic
    @Column(name = "ID_BANK")
    private int idBank;
    @Basic
    @Column(name = "ID_STOCK")
    private int idStock;

    public Sim(int id) {
        this.id = id;
    }
}
