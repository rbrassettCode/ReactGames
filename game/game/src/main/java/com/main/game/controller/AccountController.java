package com.main.game.controller;

import com.main.game.domain.Account;
import com.main.game.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/register")
    public ResponseEntity<Account> register(@RequestBody Account account) {
        if(accountRepository.findByUsername(account.getUsername()) != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        accountRepository.save(account);
        return new ResponseEntity<>(account, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Account> login(@RequestBody Account account) {
        Account existingAccount = accountRepository.findByUsername(account.getUsername());
        if(existingAccount == null || !existingAccount.getPassword().equals(account.getPassword())) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(existingAccount, HttpStatus.OK);
    }

}