package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.exception.SimNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.exception.StorageNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.model.Storage;
import com.teleticwebsiteback.teleticwebsiteback.repo.StorageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StorageService {


    private final StorageRepo storageRepo;
    @Autowired
    public StorageService(StorageRepo storageRepo){
        this.storageRepo = storageRepo;

    }

    public Storage addStorage(Storage storage) {
        return storageRepo.save(storage);
    }

    public List<Storage> findallStorage(){return storageRepo.findAll();}
    public Storage updateStorage(Long id, Storage storage) {
        Optional<Storage> existingSotckings = storageRepo.findSotckingById(id);
        if (existingSotckings.isPresent()) {
            Storage existingStorage = existingSotckings.get();
            existingStorage.setEtagere(storage.getEtagere());
            existingStorage.setRange(storage.getRange());
            existingStorage.setRayon(storage.getRayon());
            return storageRepo.save(existingStorage);
        }
        throw new SimNotFoundException("Sim with id " + id + " not found");
    }

    public Storage findStorageById(Long id) {
        return storageRepo.findSotckingById(id).orElseThrow(()-> new StorageNotFoundException("Tpe by id" + id +"was not found"));
    }

    public void deleteStorage(Long id){
        storageRepo.deleteById(id);}
}
