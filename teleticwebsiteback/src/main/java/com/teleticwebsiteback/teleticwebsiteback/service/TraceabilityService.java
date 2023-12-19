package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.Dtos.TraceListDto;
import com.teleticwebsiteback.teleticwebsiteback.exception.TpeNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.exception.TraceabilityNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.model.Tpe;
import com.teleticwebsiteback.teleticwebsiteback.model.Traceability;
import com.teleticwebsiteback.teleticwebsiteback.repo.TpeRepo;
import com.teleticwebsiteback.teleticwebsiteback.repo.TraceabilityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TraceabilityService {
    private final TraceabilityRepo traceabilityRepo;

    @Autowired
    public TraceabilityService(TraceabilityRepo traceabilityRepo) {
        this.traceabilityRepo = traceabilityRepo;
    }

    public Traceability addTraceability(Traceability traceability) {
        return traceabilityRepo.save(traceability);
    }

    public List<Traceability> findAllTraceability() {
        return traceabilityRepo.findAll();
    }

    public Traceability updateTraceability(Traceability traceability) {
        return traceabilityRepo.save(traceability);
    }

    public Traceability findTraceabilityById(Long id) {
        return traceabilityRepo.findTraceabilityById(id)
                .orElseThrow(() -> new TraceabilityNotFoundException("Traceability with ID " + id + " was not found"));
    }

    public void deleteTraceability(Long id) {
        traceabilityRepo.deleteById(id);
    }

    public List<Traceability> getTrace(Long id) {
        return traceabilityRepo.findAllByTpeId(id);
    }
}
