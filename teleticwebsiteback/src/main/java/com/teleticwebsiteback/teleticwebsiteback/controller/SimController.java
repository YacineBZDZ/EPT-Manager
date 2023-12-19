package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.teleticwebsiteback.teleticwebsiteback.model.Sim;
import com.teleticwebsiteback.teleticwebsiteback.service.SimService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user/sim")
public class SimController {
    private SimService simService;

    public SimController(SimService simService) {
        this.simService = simService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Sim>> getAllSim() {
        List<Sim> sims = simService.findAllSim();
        return new ResponseEntity<>(sims, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Sim> getSimById(@PathVariable("id") Long id) {
        Sim sim = simService.findSimById(id);
        return new ResponseEntity<>(sim, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Sim> addSim(@RequestBody Sim sim) {
        Sim newsim = simService.addSim(sim);
        return new ResponseEntity<>(newsim, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Sim> updateSim(
            @PathVariable("id") Long id,
            @RequestBody Sim sim) {
        Sim updatesim = simService.updateSim(id, sim);
        return  ResponseEntity.ok(updatesim);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSim(@PathVariable("id") Long id) {
        simService.deleteSim(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSim(@PathVariable("id") Long id) {
        return new ResponseEntity<>(simService.getSim(id), HttpStatus.OK);
    }

}
