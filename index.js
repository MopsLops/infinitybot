const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
    host: 'MeinKampf54.aternos.me',
    port: 36631,
    username: 'Bot',   
  });

  bot.on('login', async () => {
    console.log('bot is on')
  });

  bot.once('spawn', () => {
    bot.setControlState('jump', true)
    bot.setControlState('right', true)
    bot.setControlState('back', true)
  })

  bot.on('chat', (username, message) => {
    if (message == 'leave') {
      leave()
    }
  });

  function leave(){
    bot.end()
  };