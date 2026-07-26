package com.dn5.junit;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
public class BankAccountTest {
    private BankAccount account;
    @BeforeEach
    public void setUp() {
        account = new BankAccount(100.0);
        System.out.println("Setup: created account with balance 100.0");
    }
    @AfterEach
    public void tearDown() {
        account = null;
        System.out.println("Teardown: account reference cleared");
    }
    @Test
    public void testDeposit_followsAAAPattern() {
        double depositAmount = 50.0;
        account.deposit(depositAmount);
        assertEquals(150.0, account.getBalance());
    }
    @Test
    public void testWithdraw_followsAAAPattern() {
        double withdrawAmount = 40.0;
        account.withdraw(withdrawAmount);
        assertEquals(60.0, account.getBalance());
    }
    @Test
    public void testWithdraw_insufficientFunds_throwsException() {
        double withdrawAmount = 1000.0;
        assertThrows(IllegalStateException.class, () -> account.withdraw(withdrawAmount));
    }
}
