const mineflayer = require('mineflayer')
let countDown = 20


const bot = mineflayer.createBot({
    host: 'MeinKampf54.aternos.me',
    port: 36631,
    username: 'Bot',   
  })

  bot.on('login', async () => {
    console.log('bot is on')
  })

  bot.once('spawn', () => {
    bot.chat('&aДобро пожаловать в Казахстан!')
  })

  bot.on('chat', (all_members_are_administrators, message) => {
    if (message == 'liv') {
      leave()
    }

    if (message == 'Кто гей?')
    bot.chat("[MetalDawin] > Я")
  })

  function leave(){
    bot.end()
  }