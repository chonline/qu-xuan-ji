// 完整 FortuneServiceImpl with cache
@Service
public class FortuneServiceImpl implements FortuneService {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    public FortuneVO getDailyFortune(Long userId, String type) {
        String key = "fortune:daily:" + userId + ":" + type + ":" + LocalDate.now();
        FortuneVO cached = (FortuneVO) redisTemplate.opsForValue().get(key);
        if (cached != null) return cached;

        // AI call + logic
        FortuneVO result = aiService.generateFortune(...);
        redisTemplate.opsForValue().set(key, result, 24, TimeUnit.HOURS);
        return result;
    }
}