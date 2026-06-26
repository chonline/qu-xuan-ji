package com.quxuanji.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @PostMapping("/create")
    public Map<String, Object> createOrder(@RequestBody Map<String, Object> request) {
        // TODO: 实现创建支付订单逻辑
        return Map.of("code", 200, "message", "支付订单创建成功", "data", request);
    }

    @PostMapping("/callback")
    public String payCallback(@RequestBody Map<String, Object> callback) {
        // TODO: 微信支付回调处理
        return "success";
    }
}