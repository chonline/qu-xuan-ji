package com.quxuanji.controller;

import com.quxuanji.service.TarotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tarot")
public class TarotController {
    @Autowired
    private TarotService tarotService;

    @PostMapping("/draw")
    public Result<TarotVO> drawCards(@RequestHeader("X-User-Id") Long userId, @RequestBody TarotDrawRequest request) {
        return Result.success(tarotService.drawCards(userId, request));
    }
}