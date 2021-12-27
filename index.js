const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
    host: 'MeinKampf54.aternos.me',
    port: 36631,
    username: 'Bot',   
  })

  bot.on('login', async () => {
    console.log('bot is on')
  })

  bot.on('chat', (all_members_are_administrators, message) => {
    if (message == 'liv') {
      leave()
    }
  })

  function leave(){
    bot.end()
  }