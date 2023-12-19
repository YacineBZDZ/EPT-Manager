package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.teleticwebsiteback.teleticwebsiteback.model.Consumable;
import com.teleticwebsiteback.teleticwebsiteback.service.ConsumableService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user/consumable")
public class ConsumableController {
    private ConsumableService consumableService;

    public ConsumableController(ConsumableService consumableService) {
        this.consumableService = consumableService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Consumable>> getAllConsumable() {
        List<Consumable> consumables = consumableService.findallConsumable();
        return new ResponseEntity<>(consumables, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Consumable> getConsumableById(@PathVariable("id") Long id) {
        Consumable consumable = consumableService.findConsumableById(id);
        return new ResponseEntity<>(consumable, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Consumable> addConsumable(@RequestBody Consumable consumable) {
        Consumable newConsumable = consumableService.addConsumable(consumable);
        return new ResponseEntity<>(newConsumable, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Consumable> updateConsumable(  @PathVariable("id") Long id, @RequestBody Consumable consumable) {
        Consumable updatedConsumable = consumableService.updateConsumable(id,consumable);
        return  ResponseEntity.ok(updatedConsumable);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteConsumable(@PathVariable("id") Long id) {
        consumableService.deleteConsumable(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
