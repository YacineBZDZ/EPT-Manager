package com.teleticwebsiteback.teleticwebsiteback.repo;
import com.teleticwebsiteback.teleticwebsiteback.model.Tpe;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
public interface TpeRepo extends JpaRepository<Tpe , Long> {
        Optional<Tpe> findTpeById(Long id);

}
