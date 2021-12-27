const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
    host: 'MeinKampf54.aternos.me',
    port: 36631,
    username: 'Bot',   
  })

  bot.on('chat', (username, message) => {
    if (message == 'liv') {
      leave()
    }
  })

  function leave(){
    bot.end()
  }