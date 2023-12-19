package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.teleticwebsiteback.teleticwebsiteback.model.Kit;
import com.teleticwebsiteback.teleticwebsiteback.model.Tpe;
import com.teleticwebsiteback.teleticwebsiteback.service.KitService;
import com.teleticwebsiteback.teleticwebsiteback.service.TpeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user/kit")
public class KitController {
    private final KitService kitService;
    public KitController(KitService kitService){
        this.kitService = kitService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Kit>> getAllTpe(){
        List<Kit> tpe = kitService.findAllKit();
        return new ResponseEntity<>(tpe, HttpStatus.OK);
    }
    @GetMapping ("/find/{id}")
    public ResponseEntity<Kit> getTpeById(@PathVariable("id")Long id) {
        Kit kit = kitService.findKitById(id);
        return new ResponseEntity<>(kit, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Kit> addKit(@RequestBody Kit kit){
        Kit newKit = kitService.addKit(kit);
        return new ResponseEntity<>(newKit, HttpStatus.CREATED);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Kit> updateTpe(
            @PathVariable("id") Long id,
            @RequestBody Kit kit){
        Kit updateKit = kitService.updateKit(id, kit);
        return  ResponseEntity.ok(updateKit);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteKit(@PathVariable("id") Long id){
        kitService.deleteKit(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
