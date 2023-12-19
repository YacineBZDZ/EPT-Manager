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
public class Tpe {
    @GeneratedValue
    @Id
    @Column(name = "ID")
    private int id;

    @Basic
    @Column(name = "SERIAL_NUMBER")
    private int serialNumber;

    @Basic
    @Column(name = "MODEL")
    private String model;

    @Basic
    @Column(name = "NAME_PAYEMENT_PROCESSOR")
    private String namePaymentProcessor;

    @Basic
    @Column(name = "COMMUNICATION_METHOD")
    private String communicationMethod;






    public Tpe(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(int serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getNamePaymentProcessor() {
        return namePaymentProcessor;
    }

    public void setNamePaymentProcessor(String namePaymentProcessor) {
        this.namePaymentProcessor = namePaymentProcessor;
    }

    public String getCommunicationMethod() {
        return communicationMethod;
    }

    public void setCommunicationMethod(String communicationMethod) {
        this.communicationMethod = communicationMethod;
    }







    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tpe tpe = (Tpe) o;
        return id == tpe.id && serialNumber == tpe.serialNumber  && Objects.equals(model, tpe.model) && Objects.equals(namePaymentProcessor, tpe.namePaymentProcessor) && Objects.equals(communicationMethod, tpe.communicationMethod);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, serialNumber, model, namePaymentProcessor, communicationMethod);
    }
}
