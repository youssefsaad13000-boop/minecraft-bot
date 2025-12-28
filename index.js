require('dotenv').config();
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: 'Blocky',
  version: '1.21.11' // غيّر حسب نسخة السيرفر على Aternos
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
