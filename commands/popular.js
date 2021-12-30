import axios from 'axios'
import cheerio from 'cheerio'
import popularBubble from '../template/popularBubble.js'
// import util from 'util'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.agentm.tw/')
    const $ = cheerio.load(data)
    // 指定票房統計時間 及 第一名片名
    popularBubble.contents.contents[0].body.contents[2].text = '統計時間 ' + `${$('.range').eq(0).text()}`
    popularBubble.contents.contents[0].body.contents[5].contents[0].contents[1].text = `${$('.tw').eq(0).text()}`
    popularBubble.contents.contents[1].body.contents[2].text = '統計時間 ' + `${$('.range').eq(1).text()}`
    // popularBubble.contents.contents[1].body.contents[5] 此項為第一部片欄位
    popularBubble.contents.contents[1].body.contents[5].contents[0].contents[1].text = `${$('.tw').eq(1).text()}`
    // 網頁連結
    // popularBubble.contents.contents[0].body.contents[5].action.uri = 'https://www.agentm.tw' + `${$('.rank').eq(0).find('a').eq(0).attr('href')}`

    for (let i = 6; i <= 14; i++) {
      const j = i - 5
      popularBubble.contents.contents[0].body.contents[i].contents[0].contents[1].text = $('.rank').eq(0).find('a').eq(j).text().trim()
      popularBubble.contents.contents[1].body.contents[i].contents[0].contents[1].text = $('.rank').eq(1).find('a').eq(j).text().trim()
    }
    // 網址
    for (let i = 5; i <= 14; i++) {
      const j = i - 5
      popularBubble.contents.contents[0].body.contents[i].action.uri = 'https://www.agentm.tw' + `${$('.rank').eq(0).find('a').eq(j).attr('href')}`
      popularBubble.contents.contents[1].body.contents[i].action.uri = 'https://www.agentm.tw' + `${$('.rank').eq(1).find('a').eq(j).attr('href')}`
    }

    // console.log(popularBubble)
    // console.log(util.inspect(popularBubble, true, null))

    event.reply(popularBubble)
  } catch (error) {
    console.log('錯誤')
    event.reply('發生錯誤')
  }
}
