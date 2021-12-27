import axios from 'axios'
import cheerio from 'cheerio'
import flex from '../template/flex.js'

export default async (event) => {
  try {
    const message1 = event.message.text
    const { data } = await axios.get('https://www.agentm.tw/search_page?type=movie&', { params: { k: message1 } })
    const $ = cheerio.load(data)
    // const replies = []
    if ($('.fg-title').length <= 5) {
      for (let i = 0; i < $('.fg-title').length; i++) {
        flex.contents.contents[i].body.contents[0].url = `${$('.fg-frame').eq(i).find('img').attr('src')}`
        flex.contents.contents[i].body.contents[1].contents[0].contents[0].text = `${$('.fg-title').eq(i).text().trim()}`
        flex.contents.contents[i].body.contents[1].contents[1].contents[0].text = `${$('.fg-caption').eq(i).find('time').text()}`
        flex.contents.contents[i].body.contents[1].contents[2].contents[1].action.uri = 'https://www.agentm.tw' + `${$('.fg-itm').eq(i).find('a').attr('href')}`
      }
    } else {
      for (let i = 0; i < 5; i++) {
        flex.contents.contents[i].body.contents[0].url = `${$('.fg-frame').eq(i).find('img').attr('src')}`
        flex.contents.contents[i].body.contents[1].contents[0].contents[0].text = `${$('.fg-title').eq(i).text().trim()}`
        flex.contents.contents[i].body.contents[1].contents[1].contents[0].text = `${$('.fg-caption').eq(i).find('time').text()}`
        flex.contents.contents[i].body.contents[1].contents[2].contents[1].action.uri = 'https://www.agentm.tw' + `${$('.fg-itm').eq(i).find('a').attr('href')}`
      }
    }
    event.reply(flex)
    console.log($('.fg-itm').eq(0).find('a').attr('href'))
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
