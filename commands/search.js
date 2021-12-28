import axios from 'axios'
import cheerio from 'cheerio'

export default async (event) => {
  try {
    const message1 = event.message.text
    const { data } = await axios.get('https://www.agentm.tw/search_page?type=movie&', { params: { k: message1 } })
    const $ = cheerio.load(data)
    const replies = {
      type: 'flex',
      altText: '電影搜尋結果',
      contents: {
        type: 'carousel',
        contents: []
      }
    }

    if ($('.fg-title').length > 5) {
      for (let i = 0; i < 6; i++) {
        replies.contents.contents.push(
          {
            type: 'bubble',
            body: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: `${$('.fg-frame').eq(i).find('img').attr('src')}`,
                  size: 'full',
                  aspectMode: 'cover',
                  aspectRatio: '2:3',
                  gravity: 'top'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'text',
                          text: `${$('.fg-title').eq(i).text().trim()}`,
                          size: 'xl',
                          color: '#ffffff',
                          weight: 'bold'
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'baseline',
                      contents: [
                        {
                          type: 'text',
                          text: '上映日期 ' + `${$('.fg-caption').eq(i).find('time').text()}`,
                          color: '#ebebeb',
                          size: 'sm',
                          flex: 0
                        }
                      ],
                      spacing: 'lg'
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'filler'
                        },
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '詳細資訊',
                            uri: 'https://www.agentm.tw' + `${$('.fg-itm').eq(i).find('a').attr('href')}`
                          },
                          position: 'relative',
                          margin: 'none',
                          height: 'sm',
                          style: 'link'
                        }
                      ],
                      borderWidth: '1px',
                      cornerRadius: '4px',
                      spacing: 'sm',
                      borderColor: '#ffffff',
                      margin: 'xxl',
                      height: '40px',
                      background: {
                        type: 'linearGradient',
                        angle: '45deg',
                        startColor: '#C4BFBDaa',
                        endColor: '#ffffffaa'
                      }
                    }
                  ],
                  position: 'absolute',
                  offsetBottom: '0px',
                  offsetStart: '0px',
                  offsetEnd: '0px',
                  backgroundColor: '#C4BFBDcc',
                  paddingAll: '20px',
                  paddingTop: '18px'
                }
              ],
              paddingAll: '0px'
            }
          }
        )
      }
    } else if ($('.fg-title').length > 0) {
      for (let i = 0; i < $('.fg-title').length; i++) {
        replies.contents.contents.push(
          {
            type: 'bubble',
            body: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: `${$('.fg-frame').eq(i).find('img').attr('src')}`,
                  size: 'full',
                  aspectMode: 'cover',
                  aspectRatio: '2:3',
                  gravity: 'top'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'text',
                          text: `${$('.fg-title').eq(i).text().trim()}`,
                          size: 'xl',
                          color: '#ffffff',
                          weight: 'bold'
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'baseline',
                      contents: [
                        {
                          type: 'text',
                          text: '上映日期 ' + `${$('.fg-caption').eq(i).find('time').text()}`,
                          color: '#ebebeb',
                          size: 'sm',
                          flex: 0
                        }
                      ],
                      spacing: 'lg'
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'filler'
                        },
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '詳細資訊',
                            uri: 'https://www.agentm.tw' + `${$('.fg-itm').eq(i).find('a').attr('href')}`
                          },
                          position: 'relative',
                          margin: 'none',
                          height: 'sm',
                          style: 'link'
                        }
                      ],
                      borderWidth: '1px',
                      cornerRadius: '4px',
                      spacing: 'sm',
                      borderColor: '#ffffff',
                      margin: 'xxl',
                      height: '40px',
                      background: {
                        type: 'linearGradient',
                        angle: '45deg',
                        startColor: '#C4BFBDaa',
                        endColor: '#ffffffaa'
                      }
                    }
                  ],
                  position: 'absolute',
                  offsetBottom: '0px',
                  offsetStart: '0px',
                  offsetEnd: '0px',
                  backgroundColor: '#C4BFBDcc',
                  paddingAll: '20px',
                  paddingTop: '18px'
                }
              ],
              paddingAll: '0px'
            }
          }
        )
      }
    } else {
      event.reply('SORRY! 找不到符合條件的資料，建議您調整輸入的關鍵字，重新進行搜尋')
    }
    console.log(replies)
    event.reply(replies)
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
