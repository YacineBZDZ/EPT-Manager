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
public class Traceability {
    @GeneratedValue
    @Id
    @Column(name = "ID_t")
    private int id;

     @Basic
    @Column(name = "state")
    private String state;

     @Basic
    @Column(name = "date")
    private String date;

    @ManyToOne
    @JoinColumn(name = "tpe_fk")
    private Tpe tpe;

}
