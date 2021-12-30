import 'dotenv/config'
import linebot from 'linebot'
import search from './commands/search.js'
import weekNew from './commands/weekNew.js'
import popular from './commands/popular.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!new')) {
      weekNew(event)
    } else if (event.message.text.startsWith('!pa')) {
      popular(event)
    } else {
      search(event)
    }
  }
})
