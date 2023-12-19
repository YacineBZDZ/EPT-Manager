package com.teleticwebsiteback.teleticwebsiteback.repo;
import com.teleticwebsiteback.teleticwebsiteback.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<Users, Long> {

    Optional<Users> findUsersById(Long id);
    Optional<Users> findByEmail(String email);

}
