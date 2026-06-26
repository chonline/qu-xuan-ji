package com.quxuanji.controller;

import com.quxuanji.service.MasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/master")
public class MasterController {
    @Autowired
    private MasterService masterService;

    @PostMapping("/session")
    public Result<ChatVO> createSession(@RequestHeader("X-User-Id") Long userId, @RequestBody MasterSessionRequest request) {
        return Result.success(masterService.createSession(userId, request.getStyle()));
    }

    @PostMapping("/chat")
    public Result<ChatVO> chat(@RequestHeader("X-User-Id") Long userId, @RequestBody ChatRequest request) {
        return Result.success(masterService.chat(userId, request));
    }
}