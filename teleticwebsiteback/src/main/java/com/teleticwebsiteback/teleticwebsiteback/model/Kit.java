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
public class Kit {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    private int id;

    @OneToOne
    @JoinColumn(name = "tpe_fk")
    private Tpe tpe;

    @OneToOne
    @JoinColumn(name = "sim_fk")
    private Sim sim;

    @OneToOne
    @JoinColumn(name = "store_fk")
    private Store store;

    @OneToOne
    @JoinColumn(name = "consumable_fk")
    private Consumable conso;


}
