# 前后端交互细节文档 - 每日运势模块

## 1. 接口定义

### GET /api/fortune/daily

**参数**:
- type: zodiac | zodiac_animal | bazi
- (header) X-User-Id

**响应** (FortuneVO JSON):
```json
{
  "title": "🌟 金牛座今日运势",
  "career": "...",
  "love": "...",
  "wealth": "...",
  "health": "...",
  "advice": "...",
  "luckyColor": "浅绿",
  "luckyNumber": "8"
}
```

## 2. 缓存优化
- Redis key: fortune:daily:{userId}:{type}:{date}
- TTL: 24h
- 每日免费次数本地缓存 + DB

## 3. 前端调用示例
See pages/fortune/fortune.js