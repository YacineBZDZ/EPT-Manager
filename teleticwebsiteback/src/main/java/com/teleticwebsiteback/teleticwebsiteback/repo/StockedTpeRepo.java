package com.teleticwebsiteback.teleticwebsiteback.repo;

import com.teleticwebsiteback.teleticwebsiteback.model.StockedTpe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockedTpeRepo extends JpaRepository<StockedTpe, Long> {
//    Optinal<StockedTpe> findStockedTpeById(id);
}
