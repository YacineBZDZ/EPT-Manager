package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.exception.BankNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.exception.SimNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.model.Bank;
import com.teleticwebsiteback.teleticwebsiteback.model.Consumable;
import com.teleticwebsiteback.teleticwebsiteback.model.Sim;
import com.teleticwebsiteback.teleticwebsiteback.repo.BankRepo;
import com.teleticwebsiteback.teleticwebsiteback.repo.ConsumableRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ConsumableService {
        private ConsumableRepo consumableRepo;
        @Autowired
        public ConsumableService(ConsumableRepo consumableRepo){
            this.consumableRepo= consumableRepo;
        }
        public Consumable addConsumable(Consumable consumable){
            return consumableRepo.save(consumable);
        }
        public List<Consumable> findallConsumable(){return consumableRepo.findAll();}
    public Consumable updateConsumable(Long id, Consumable consumable) {
        Optional<Consumable> existingConsumable = consumableRepo.findConsumableById(id);
        if (existingConsumable.isPresent()) {
            Consumable existingConsumables = existingConsumable.get();
            existingConsumables.setProductName(consumable.getProductName());
            existingConsumables.setBrandName(consumable.getBrandName());
            existingConsumables.setCategory(consumable.getCategory());
            existingConsumables.setQuantity(consumable.getQuantity());
            existingConsumables.setSupplierInformation(consumable.getSupplierInformation());
            existingConsumables.setCost(consumable.getCost());

            return consumableRepo.save(existingConsumables);
        }

        throw new SimNotFoundException("Sim with id " + id + " not found");
    }        public Consumable findConsumableById(Long id){
            return consumableRepo.findConsumableById(id).orElseThrow(()-> new BankNotFoundException("User by id" + id +"was not found"));
        }
        public void deleteConsumable(Long id){consumableRepo.deleteById(id);}

}
