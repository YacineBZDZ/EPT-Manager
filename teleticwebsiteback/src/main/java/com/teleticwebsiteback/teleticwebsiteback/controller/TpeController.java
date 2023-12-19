package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.teleticwebsiteback.teleticwebsiteback.model.Tpe;
import com.teleticwebsiteback.teleticwebsiteback.service.TpeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user/tpe")
public class TpeController {
    private final TpeService tpeService;
    public TpeController(TpeService tpeService){
        this.tpeService = tpeService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Tpe>>getAllTpe(){
        List<Tpe> tpe = tpeService.findallTpe();
        return new ResponseEntity<>(tpe, HttpStatus.OK);
    }
        @GetMapping ("/find/{id}")
    public ResponseEntity<Tpe> getTpeById(@PathVariable("id")Long id) {
        Tpe tpe = tpeService.findTpeById(id);
        return new ResponseEntity<>(tpe, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Tpe> addTpe(@RequestBody Tpe tpe){
        Tpe newTpe = tpeService.addTpe(tpe);
        return new ResponseEntity<>(newTpe, HttpStatus.CREATED);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Tpe> updateTpe(
            @PathVariable("id") Long id,
            @RequestBody Tpe tpe){
        Tpe updateTpe = tpeService.updateTpe(id, tpe);
        return  ResponseEntity.ok(updateTpe);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTpe(@PathVariable("id") Long id){
        tpeService.deleteTpe(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
