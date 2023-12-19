package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.model.StockedTpe;
import com.teleticwebsiteback.teleticwebsiteback.repo.StockedTpeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockedTpeService {
    private StockedTpeRepo stockedTpeRepo;

    @Autowired
    public StockedTpeService(StockedTpeRepo stockedTpeRepo) {
        this.stockedTpeRepo = stockedTpeRepo;
    }

    public StockedTpe addStockedTpe(StockedTpe stockedTpe) {
        return stockedTpeRepo.save(stockedTpe);
    }

    public List<StockedTpe> findAllStockedTpe() {
        return stockedTpeRepo.findAll();
    }

    public void deleteStocked(Long id) {
        stockedTpeRepo.deleteById(id);
    }



}
