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
public class Storage {
    @GeneratedValue
    @Id
    @Column(name = "ID")
    private int id;
    @Basic
    @Column(name = "ETAGEREs")
    private String etagere;
    @Basic
    @Column(name = "RAYONs")
    private String rayon;
    @Basic
    @Column(name = "RANGEs")
    private String range;

    public Storage(int id) {
        this.id = id;
    }
}
