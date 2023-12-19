package com.teleticwebsiteback.teleticwebsiteback.repo;

import com.teleticwebsiteback.teleticwebsiteback.model.Bank;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BankRepo extends JpaRepository<Bank, Long> {
    Optional<Bank>  findBankById(Long id);
    long deleteBankById(Long id);

}
