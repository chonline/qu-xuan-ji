package com.quxuanji.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FortuneServiceTest {

    @Autowired
    private FortuneService fortuneService;

    @Test
    void testDailyFortune() {
        // TODO: Add assertions
        String result = fortuneService.getDailyFortune(1L, "zodiac");
        assertNotNull(result);
    }
}