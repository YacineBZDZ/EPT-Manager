package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.exception.SimNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.model.Kit;
import com.teleticwebsiteback.teleticwebsiteback.model.Sim;
import com.teleticwebsiteback.teleticwebsiteback.repo.KitRepo;
import com.teleticwebsiteback.teleticwebsiteback.repo.SimRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KitService {
    private KitRepo kitRepo;

    @Autowired
    public KitService(KitRepo kitRepo) {
        this.kitRepo = kitRepo;
    }

    public Kit addKit(Kit kit) {
        return kitRepo.save(kit);
    }

    public List<Kit> findAllKit() {
        return kitRepo.findAll();
    }

    public Kit updateKit(Long id, Kit kit) {
        Optional<Kit> existingKit = kitRepo.findKitById(id);
        if (existingKit.isPresent()) {
            Kit existingKits = existingKit.get();
            existingKits.setTpe(kit.getTpe());
            existingKits.setSim(kit.getSim());
            existingKits.setStore(kit.getStore());
            existingKits.setConso(kit.getConso());


            return kitRepo.save(existingKits);
        }

        throw new SimNotFoundException("Sim with id " + id + " not found");
    }

    public Kit findKitById(Long id) {
        return kitRepo.findKitById(id).orElseThrow(() -> new SimNotFoundException("Sim by id " + id + " was not found"));
    }

    public void deleteKit(Long id) {
        kitRepo.deleteById(id);
    }

}
