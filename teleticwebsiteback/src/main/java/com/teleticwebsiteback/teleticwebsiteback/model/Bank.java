package com.teleticwebsiteback.teleticwebsiteback.model;

import com.teleticwebsiteback.teleticwebsiteback.service.BankService;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Bank {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    private int id;
    @Basic
    @Column(name = "BANK_NAME")
    private String bankName;
    @Basic
    @Column(name = "AGENCY_ADDRESS")
    private String agencyAddress;
    @Basic
    @Column(name = "PHONE_NUMBER")
    private int phoneNumber;
    @Basic
    @Column(name = "BANK_Email")
    private String bankEmail;

    @Basic
    @Column(name = "SERVICE_OFFERED")
    private String serviceOffered;

public Bank(){}
    public Bank(int id, String bankName, String agencyAddress, int phoneNumber, String bankEmail, String serviceOffered){
    this.id = id;
    this.bankName = bankName;
    this.agencyAddress = agencyAddress;
    this.phoneNumber = phoneNumber;
    this.bankEmail = bankEmail;
    this.serviceOffered =serviceOffered;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getAgencyAddress() {
        return agencyAddress;
    }

    public void setAgencyAddress(String agencyAddress) {
        this.agencyAddress = agencyAddress;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getBankEmail() {
        return bankEmail;
    }

    public void setBankEmail(String bankEmail) {
        this.bankEmail = bankEmail;
    }


    public String getServiceOffered() {
        return serviceOffered;
    }

    public void setServiceOffered(String serviceOffered) {
        this.serviceOffered = serviceOffered;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Bank bank)) return false;
        return id == bank.id && phoneNumber == bank.phoneNumber && Objects.equals(bankName, bank.bankName) && Objects.equals(agencyAddress, bank.agencyAddress) && Objects.equals(bankEmail, bank.bankEmail) && Objects.equals(serviceOffered, bank.serviceOffered);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, bankName, agencyAddress, phoneNumber, bankEmail, serviceOffered);
    }
}
