package com.teleticwebsiteback.teleticwebsiteback.repo;

import com.teleticwebsiteback.teleticwebsiteback.model.Tpe;
import com.teleticwebsiteback.teleticwebsiteback.model.Traceability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TraceabilityRepo extends JpaRepository<Traceability, Long> {
    Optional<Traceability> findTraceabilityById(Long id);

    List<Traceability> findAllByTpeId(Long id);

}
