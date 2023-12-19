package com.teleticwebsiteback.teleticwebsiteback.repo;

import com.teleticwebsiteback.teleticwebsiteback.model.Kit;
import com.teleticwebsiteback.teleticwebsiteback.model.Sim;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KitRepo extends JpaRepository<Kit,Long> {
    Optional<Kit> findKitById(Long id);

}
