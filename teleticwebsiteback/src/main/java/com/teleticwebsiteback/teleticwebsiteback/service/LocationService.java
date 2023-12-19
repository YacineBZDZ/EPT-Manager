package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.model.Location;
import com.teleticwebsiteback.teleticwebsiteback.repo.LocationRepo;
import com.teleticwebsiteback.teleticwebsiteback.exception.LocationNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {
    private LocationRepo locationRepo;

    @Autowired
    public LocationService(LocationRepo locationRepo) {
        this.locationRepo = locationRepo;
    }
    public Location addLocation(Location location) {
        return locationRepo.save(location);
    }

    public List<Location> findAllLocations() {
        return locationRepo.findAll();
    }

    public Location updateLocation(Location location) {
        return locationRepo.save(location);
    }

    public Location findLocationById(Long id) {
        return locationRepo.findLocationById(id).orElseThrow(() -> new LocationNotFoundException("Location with id " + id + " was not found"));
    }

    public void deleteLocation(Long id) {
        locationRepo.deleteById(id);
    }

}
