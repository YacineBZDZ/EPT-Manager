package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.exception.SimNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.exception.TpeNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.model.Sim;
import com.teleticwebsiteback.teleticwebsiteback.model.Tpe;
import com.teleticwebsiteback.teleticwebsiteback.repo.TpeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TpeService {
    private final TpeRepo tpeRepo;
    @Autowired
    public TpeService(TpeRepo tpeRepo){
        this.tpeRepo = tpeRepo;

    }

    public Tpe addTpe(Tpe tpe) {
        return tpeRepo.save(tpe);
    }

    public List<Tpe> findallTpe(){return tpeRepo.findAll();}
    public Tpe updateTpe(Tpe tpe){return tpeRepo.save(tpe);}


    public Tpe findTpeById(Long id) {
        return tpeRepo.findTpeById(id).orElseThrow(()-> new TpeNotFoundException("Tpe by id" + id +"was not found"));
    }


    public Tpe updateTpe(Long id, Tpe tpe) {
        Optional<Tpe> existingTpe = tpeRepo.findTpeById(id);
        if (existingTpe.isPresent()) {
            Tpe existingTpes = existingTpe.get();
            existingTpes.setModel(tpe.getModel());
            existingTpes.setSerialNumber(tpe.getSerialNumber());
            existingTpes.setCommunicationMethod(tpe.getCommunicationMethod());
            existingTpes.setNamePaymentProcessor(tpe.getNamePaymentProcessor());

            return tpeRepo.save(existingTpes);
        }

        throw new SimNotFoundException("Sim with id " + id + " not found");
    }
    public void deleteTpe(Long id){tpeRepo.deleteById(id);}
}


