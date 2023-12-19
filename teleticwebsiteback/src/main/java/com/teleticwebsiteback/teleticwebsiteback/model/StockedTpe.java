package com.teleticwebsiteback.teleticwebsiteback.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StockedTpe {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    private int id;

    @OneToOne
    @JoinColumn(name = "tpe_fk")
    private Tpe tpe;

    @OneToOne
    @JoinColumn(name = "sotcking_fk")
    private Storage storage;



}
