import axios from 'axios'
import cheerio from 'cheerio'
import popularBubble from '../template/popularBubble.js'

export default async (event) => {
  try {
    const { data } = await axios.get('http://app2.atmovies.com.tw/boxoffice/')
    const $ = cheerio.load(data)
    popularBubble.contents.contents[0].body.contents[2].text = `${$('.boDate').eq(0).text()}`
    console.log(popularBubble)
    event.reply(popularBubble)
  } catch (error) {
    console.log('錯誤')
    event.reply('發生錯誤')
  }
}
