-- 数据库初始化脚本 for 趣玄机

CREATE DATABASE IF NOT EXISTS qu_xuan_ji CHARACTER SET utf8mb4;
USE qu_xuan_ji;

-- 用户表
CREATE TABLE IF NOT EXISTS sys_user (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  open_id VARCHAR(100) UNIQUE,
  nickname VARCHAR(50),
  avatar_url VARCHAR(255),
  gender TINYINT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 用户档案
CREATE TABLE IF NOT EXISTS user_profile (
  user_id BIGINT PRIMARY KEY,
  birthday DATE,
  birth_time VARCHAR(20),
  zodiac VARCHAR(20),
  zodiac_animal VARCHAR(20),
  mood_tag VARCHAR(50),
  vip_type INT DEFAULT 0,
  vip_expire_time DATETIME,
  free_fortune_count INT DEFAULT 3,
  last_fortune_time DATE,
  FOREIGN KEY (user_id) REFERENCES sys_user(id)
);

-- 支付订单表
CREATE TABLE IF NOT EXISTS pay_order (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_no VARCHAR(50) UNIQUE,
  user_id BIGINT,
  product_type VARCHAR(50),
  amount DECIMAL(10,2),
  pay_status TINYINT DEFAULT 0,
  transaction_id VARCHAR(100),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES sys_user(id)
);

-- VIP 记录
CREATE TABLE IF NOT EXISTS vip_member (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT,
  vip_type INT,
  start_time DATETIME,
  expire_time DATETIME,
  FOREIGN KEY (user_id) REFERENCES sys_user(id)
);

-- 其他表略...