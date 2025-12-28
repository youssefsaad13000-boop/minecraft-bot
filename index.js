const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'your.server.ip', // مثال: play.example.com
  port: 25565,            // المنفذ الافتراضي لـ Java
  username: 'YourBotName' // أو بريد/توكن إن كان سيرفر بريميوم مع دعم
});

bot.on('login', () => {
  console.log('✅ Logged in');
  bot.chat('Hello, I am a bot!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === '!ping') bot.chat('pong');
});

bot.on('error', (err) => console.error('❌', err));
bot.on('end', () => console.log('🛑 Bot disconnected'));
