import axios from 'axios'
import cheerio from 'cheerio'
import flex from '../template/flex.js'

export default async (event) => {
  try {
    const message1 = event.message.text
    const { data } = await axios.get('https://www.agentm.tw/search_page?type=movie&', { params: { k: message1 } })
    const $ = cheerio.load(data)
    const replies = []
    if ($('.fg-title').length < 5) {
      for (let i = 0; i < $('.fg-title').length; i++) {
        replies.push(`片名:${$('.fg-title').eq(i).text().trim()}
        \n上映日期:${$('.fg-caption').eq(i).find('time').text()}
        \n${$('fg-frame').eq(0).find('img').attr('src')}`)
      }
    } else {
      for (let i = 0; i < 5; i++) {
        flex.contents[i].body.contents.url = `${$('.fg-frame').eq(0).find('img').attr('src')}`
        // flex.contents.body.contents.contents[0].contents.text[0] = `${$('.fg-title').eq(i).text().trim()}`
      }
    }
    event.reply(replies)
    console.log($('fg-frame').eq(0).find('img').attr('src'))
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
