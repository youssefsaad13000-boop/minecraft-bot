require('dotenv').config();
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: Teibacraft1234.aternos.me
  port: 24226
  username: process.env.USERNAME, // لم السيرفرات غير-البريميوم
  // لو السيرفر بريميوم (يتطلب حساب ماينكرافت)، تحتاج توكن/حساب
});

bot.once('login', () => {
  console.log('✅ Logged in');
  bot.chat('Hello from my bot!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === '!ping') bot.chat('pong');
  if (message.startsWith('!say ')) bot.chat(message.slice(5));
});

bot.on('error', (err) => console.error('❌ Error:', err));
bot.on('end', (reason) => console.log('🛑 Disconnected:', reason));

// إعادة اتصال تلقائية بسيطة
const reconnectDelayMs = 10000;
bot.on('end', () => {
  setTimeout(() => {
    console.log('🔄 Reconnecting...');
    process.exit(0); // استخدم مدير تشغيل يعيد تشغيل العملية (مثل pm2) أو سكريبت bash
  }, reconnectDelayMs);
});
