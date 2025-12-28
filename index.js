require('dotenv').config();
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: process.env.HOST,          // هيقرأ من .env
  port: Number(process.env.PORT),  // هيقرأ من .env
  username: 'MyBot'                // غيّر الاسم زي ما تحب
});

bot.once('login', () => {
  console.log('✅ Logged in');
  bot.chat('Hello from my bot!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === '!ping') bot.chat('pong');
});

bot.on('error', (err) => console.error('❌ Error:', err));
bot.on('end', () => console.log('🛑 Bot disconnected'));
