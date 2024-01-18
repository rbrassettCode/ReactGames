package com.main.game.repository;

import com.main.game.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByUsername(String username);
    void deleteUserByUsername(String username);

}
