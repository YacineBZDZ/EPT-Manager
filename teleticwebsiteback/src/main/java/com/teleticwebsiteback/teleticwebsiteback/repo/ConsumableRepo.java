package com.teleticwebsiteback.teleticwebsiteback.repo;

import com.teleticwebsiteback.teleticwebsiteback.model.Consumable;
import com.teleticwebsiteback.teleticwebsiteback.model.Tpe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConsumableRepo extends JpaRepository<Consumable, Long> {
    Optional<Consumable> findConsumableById(Long id);

}
