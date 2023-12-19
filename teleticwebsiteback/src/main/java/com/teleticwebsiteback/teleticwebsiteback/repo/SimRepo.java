package com.teleticwebsiteback.teleticwebsiteback.repo;

import com.teleticwebsiteback.teleticwebsiteback.model.Sim;
import com.teleticwebsiteback.teleticwebsiteback.model.Store;
import com.teleticwebsiteback.teleticwebsiteback.model.Traceability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SimRepo extends JpaRepository<Sim,Long> {
    Optional<Sim> findSimById(Long id);
    long deleteSimById(Long id);
    List<Sim> findAllById(Long id);

}
