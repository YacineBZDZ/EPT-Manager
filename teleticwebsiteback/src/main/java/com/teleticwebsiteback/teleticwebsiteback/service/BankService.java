package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.exception.BankNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.exception.SimNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.exception.UserNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.model.Bank;
import com.teleticwebsiteback.teleticwebsiteback.model.Sim;
import com.teleticwebsiteback.teleticwebsiteback.repo.BankRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BankService {
private BankRepo bankRepo;
@Autowired
    public BankService(BankRepo bankRepo){
            this.bankRepo=bankRepo;
}
public Bank addBank(Bank bank){
    return bankRepo.save(bank);
}
public List<Bank>  findallBank(){return bankRepo.findAll();}
    public Bank updateBank(Long id, Bank bank) {
        Optional<Bank> existingBank = bankRepo.findBankById(id);
        if (existingBank.isPresent()) {
            Bank existingBanks = existingBank.get();
            existingBanks.setBankName(bank.getBankName());
            existingBanks.setPhoneNumber(bank.getPhoneNumber());
            existingBanks.setBankEmail(bank.getBankEmail());
            existingBanks.setAgencyAddress(bank.getAgencyAddress());
            existingBanks.setServiceOffered(bank.getServiceOffered());

            return bankRepo.save(existingBanks);
        }

        throw new SimNotFoundException("Sim with id " + id + " not found");
    }

    public Bank findBankById(Long id){
    return bankRepo.findBankById(id).orElseThrow(()-> new BankNotFoundException("User by id" + id +"was not found"));
    }
    public void deleteBank(Long id){bankRepo.deleteById(id);}
}
