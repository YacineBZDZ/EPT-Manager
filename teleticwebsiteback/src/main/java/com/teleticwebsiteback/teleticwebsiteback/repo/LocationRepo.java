package com.teleticwebsiteback.teleticwebsiteback.repo;

import com.teleticwebsiteback.teleticwebsiteback.model.Consumable;
import com.teleticwebsiteback.teleticwebsiteback.model.Location;
import jdk.javadoc.doclet.Taglet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LocationRepo extends JpaRepository<Location, Long> {
    Optional<Location> findLocationById(Long id);
}
