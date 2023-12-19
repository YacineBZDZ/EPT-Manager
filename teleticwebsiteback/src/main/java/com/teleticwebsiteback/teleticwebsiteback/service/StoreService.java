package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.exception.SimNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.exception.StoreNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.model.Sim;
import com.teleticwebsiteback.teleticwebsiteback.model.Store;
import com.teleticwebsiteback.teleticwebsiteback.repo.StoreRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StoreService {
    private final StoreRepo storeRepo;

    @Autowired
    public StoreService(StoreRepo storeRepo) {
        this.storeRepo = storeRepo;
    }

    public Store addStore(Store store) {
        return storeRepo.save(store);
    }

    public List<Store> findallStore() {
        return storeRepo.findAll();
    }

    public Store findStoreById(Long id) {
        return storeRepo.findStoreById(id).orElseThrow(() -> new StoreNotFoundException("Store by id " + id + "was not found"));
    }

    public Store updateStore(Long id, Store store) {
        Optional<Store> existingStores = storeRepo.findStoreById(id);
        if (existingStores.isPresent()) {
            Store existingStore = existingStores.get();
            existingStore.setStoreName(store.getStoreName());
            existingStore.setStoreCategories(store.getStoreCategories());
            existingStore.setStoreAddress(store.getStoreAddress());
            return storeRepo.save(existingStore);
        }
        throw new SimNotFoundException("Sim with id " + id + " not found");
    }
public void deleteStore(Long id){storeRepo.deleteById(id);}
}
