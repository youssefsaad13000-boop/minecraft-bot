require('dotenv').config();
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: Teibacraft1234.aternos.me,          // هيقرأ من .env
  port: 24226,  // هيقرأ من .env
  username: 'Blocky'                // غيّر الاسم زي ما تحب
});

bot.once('login', () => {
  console.log('✅ Logged in');
  bot.chat('My name is Blocky');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === '!ping') bot.chat('pong');
});

bot.on('error', (err) => console.error('❌ Error:', err));
bot.on('end', () => console.log('🛑 Bot disconnected'));
