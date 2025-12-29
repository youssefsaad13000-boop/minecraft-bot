const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Teibaceaft123.aternos.me',
    port: 60036,
    username: 'Blocky', // اسم البوت
    version: '1.21.11'
  })

  bot.on('spawn', () => {
    console.log('Bot joined the server!')

    // Anti-AFK حركة بسيطة كل 60 ثانية
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 60000)
  })

  // Auto Respawn
  bot.on('death', () => {
    console.log('Bot died, respawning...')
    setTimeout(() => bot.respawn(), 3000)
  })

  // Auto Reconnect
  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })
}

createBot()
