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
public class Location  {

    @GeneratedValue
    @Id
    @Column(name = "ID")
    private int id;

    @Basic
    @Column(name = "LATITUDE")
    private String latitude;

    @Basic
    @Column(name = "LONGITUDE")
    private String longitude;









}
