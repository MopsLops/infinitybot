const mineflayer = require('mineflayer')



const bot = mineflayer.createBot({
    host: 'MeinKampf54.aternos.me',
    port: 36631,
    username: 'Bot',   
  })

  bot.on('login', async () => {
    console.log('bot is on')
  })

  bot.once('spawn', () => {
    bot.chat('Добро пожаловать в Казахстан!')
  })

  bot.on('chat', (all_members_are_administrators, message) => {
    if (message == 'liv') {
      leave()
    }

    if (message == 'Кто гей?')
    bot.chat("/say [MetalDawin] > Я")
  })

  function leave(){
    bot.end()
  }