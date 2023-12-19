package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.teleticwebsiteback.teleticwebsiteback.model.Traceability;
import com.teleticwebsiteback.teleticwebsiteback.service.TraceabilityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user/traceability")
public class TraceabilityController {
    private final TraceabilityService traceabilityService;

    public TraceabilityController(TraceabilityService traceabilityService) {
        this.traceabilityService = traceabilityService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Traceability>> getAllTraceability() {
        List<Traceability> traceabilityList = traceabilityService.findAllTraceability();
        return new ResponseEntity<>(traceabilityList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Traceability> getTraceabilityById(@PathVariable("id") Long id) {
        Traceability traceability = traceabilityService.findTraceabilityById(id);
        return new ResponseEntity<>(traceability, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Traceability> addTraceability(@RequestBody Traceability traceability) {
        Traceability newTraceability = traceabilityService.addTraceability(traceability);
        return new ResponseEntity<>(newTraceability, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Traceability> updateTraceability(@RequestBody Traceability traceability) {
        Traceability updatedTraceability = traceabilityService.updateTraceability(traceability);
        return new ResponseEntity<>(updatedTraceability, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTraceability(@PathVariable("id") Long id) {
        traceabilityService.deleteTraceability(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTrace(@PathVariable("id") Long id) {
        return new ResponseEntity<>(traceabilityService.getTrace(id), HttpStatus.OK);
    }
}
