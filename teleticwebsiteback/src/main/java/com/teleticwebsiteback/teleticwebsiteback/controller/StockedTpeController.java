package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.teleticwebsiteback.teleticwebsiteback.model.StockedTpe;
import com.teleticwebsiteback.teleticwebsiteback.service.StockedTpeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user/stockedtpe")
public class StockedTpeController {
    private final StockedTpeService stockedTpeService;
    public StockedTpeController(StockedTpeService stockedTpeService){
        this.stockedTpeService = stockedTpeService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<StockedTpe>> getAllStockedTpe(){
        List<StockedTpe> tpe = stockedTpeService.findAllStockedTpe();
        return new ResponseEntity<>(tpe, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<StockedTpe> addStockedTpe(@RequestBody StockedTpe stockedTpe){
        StockedTpe newKit = stockedTpeService.addStockedTpe(stockedTpe);
        return new ResponseEntity<>(newKit, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteStokedTpe(@PathVariable("id") Long id){
        stockedTpeService.deleteStocked(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
