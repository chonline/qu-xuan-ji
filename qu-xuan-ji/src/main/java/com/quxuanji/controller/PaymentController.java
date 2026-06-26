package com.quxuanji.controller;

import com.quxuanji.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/create")
    public Result<String> createOrder(@RequestBody Map<String, Object> request, @RequestHeader("X-User-Id") Long userId) {
        // TODO: 完整微信支付 SDK 集成
        return Result.success("支付订单创建成功 (模拟)");
    }

    @PostMapping("/callback")
    public String callback(@RequestBody String xml) {
        // 微信支付回调处理
        return "success";
    }
}