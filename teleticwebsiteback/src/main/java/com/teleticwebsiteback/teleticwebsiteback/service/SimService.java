package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.exception.SimNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.model.Sim;
import com.teleticwebsiteback.teleticwebsiteback.repo.BankRepo;
import com.teleticwebsiteback.teleticwebsiteback.repo.SimRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class SimService {
    private SimRepo simRepo;

    @Autowired
    public SimService(SimRepo simRepo) {
        this.simRepo = simRepo;
    }

    public Sim addSim(Sim sim) {
        return simRepo.save(sim);
    }

    public List<Sim> findAllSim() {
        return simRepo.findAll();
    }

    public Sim updateSim(Long id, Sim sim) {
        Optional<Sim> existingSim = simRepo.findSimById(id);
        if (existingSim.isPresent()) {
            Sim existingSims = existingSim.get();
            existingSims.setImsi(sim.getImsi());
            existingSims.setPhoneNumber(sim.getPhoneNumber());
            existingSims.setType(sim.getType());
            existingSims.setServiceProvider(sim.getServiceProvider());
            existingSims.setSubscription(sim.getSubscription());

            return simRepo.save(existingSims);
        }

    throw new SimNotFoundException("Sim with id " + id + " not found");
    }

    public Sim findSimById(Long id) {
        return simRepo.findSimById(id).orElseThrow(() -> new SimNotFoundException("Sim by id " + id + " was not found"));
    }

    public void deleteSim(Long id) {
        simRepo.deleteById(id);
    }

    public List<Sim> getSim(Long id){
        return simRepo.findAllById(id);
    }

}
