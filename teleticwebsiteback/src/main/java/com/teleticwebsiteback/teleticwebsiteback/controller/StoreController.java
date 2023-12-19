package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.teleticwebsiteback.teleticwebsiteback.model.Store;
import com.teleticwebsiteback.teleticwebsiteback.service.StoreService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user/store")
public class StoreController {
    private final StoreService storeService;
      public StoreController(StoreService storeService){this.storeService = storeService;}
    @GetMapping("/all")
    public ResponseEntity<List<Store>>getAllStore(){
          List <Store> store = storeService.findallStore();
          return new ResponseEntity<>(store, HttpStatus.OK);
    }
@GetMapping("/find/{id}")
    public ResponseEntity<Store> getStoreById(@PathVariable("id") Long id){
          Store store = storeService.findStoreById(id);
          return new ResponseEntity<>(store, HttpStatus.OK);
}
@PostMapping("/add")
    public ResponseEntity<Store> addStore(@RequestBody Store store){
          Store newstore = storeService.addStore(store);
          return new ResponseEntity<>(newstore, HttpStatus.CREATED);
}
@PutMapping("/update/{id}")
    public ResponseEntity<Store> updateStore(            @PathVariable("id") Long id,
                                                         @RequestBody Store store){
          Store updateStore = storeService.updateStore(id,store);
    return  ResponseEntity.ok(updateStore);
}
@DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteStore(@PathVariable("id") Long id){
          storeService.deleteStore(id);
          return  new ResponseEntity<>(HttpStatus.OK);
}
}
