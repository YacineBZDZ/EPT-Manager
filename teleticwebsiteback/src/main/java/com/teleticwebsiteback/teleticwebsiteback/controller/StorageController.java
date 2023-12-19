package com.teleticwebsiteback.teleticwebsiteback.controller;
import com.teleticwebsiteback.teleticwebsiteback.model.Storage;
import com.teleticwebsiteback.teleticwebsiteback.service.StorageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/storage")
public class StorageController {
    private final StorageService storageService;
    public StorageController(StorageService storageService){
        this.storageService = storageService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Storage>> getAllStorage(){
        List<Storage> stocks = storageService.findallStorage();
        return new ResponseEntity<>(stocks, HttpStatus.OK);
    }
    @GetMapping ("/find/{id}")
    public ResponseEntity<Storage> getStorageById(@PathVariable("id")Long id) {
        Storage stocks = storageService.findStorageById(id);
        return new ResponseEntity<>(stocks, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Storage> addStorage(@RequestBody Storage storage){
        Storage newStocks = storageService.addStorage(storage);
        return new ResponseEntity<>(newStocks, HttpStatus.CREATED);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Storage> updateStorage(

            @PathVariable("id") Long id, @RequestBody Storage storage){
        Storage updateStocks = storageService.updateStorage(id, storage);
        return  ResponseEntity.ok(updateStocks);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteStorage(@PathVariable("id") Long id){
        storageService.deleteStorage(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
