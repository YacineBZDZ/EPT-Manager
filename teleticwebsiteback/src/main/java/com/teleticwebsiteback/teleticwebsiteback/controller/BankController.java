package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.teleticwebsiteback.teleticwebsiteback.model.Bank;
import com.teleticwebsiteback.teleticwebsiteback.service.BankService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user/bank")
public class BankController {
    private BankService bankService;
    public BankController(BankService bankService){
        this.bankService = bankService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Bank>> getAllBank(){
        List<Bank> banks = bankService.findallBank();
        return new ResponseEntity<>(banks, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Bank> getBankById(@PathVariable("id")Long id){
        Bank bank = bankService.findBankById(id);
        return new ResponseEntity<>(bank, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Bank> addBank(@RequestBody  Bank bank){
        Bank newbank = bankService.addBank(bank);
        return new ResponseEntity<>(newbank, HttpStatus.CREATED);
    }
@PutMapping("/update/{id}")
    public  ResponseEntity<Bank> updateBank(            @PathVariable("id") Long id,
                                                        @RequestBody Bank bank){
        Bank updatebank =  bankService.updateBank(id,bank);
    return  ResponseEntity.ok(updatebank);
}
@DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBank(@PathVariable("id") Long id){
        bankService.deleteBank(id);
        return new ResponseEntity<>(HttpStatus.OK);
}

}
