import axios from 'axios'
import cheerio from 'cheerio'

export default async (event) => {
  // const weekNew = event.message.text.replace('!new ', '')
  try {
    const { data } = await axios.get('https://www.agentm.tw/movie_list_week')
    const $ = cheerio.load(data)
    const replies2 = {
      type: 'flex',
      altText: '本周新片',
      contents: {
        type: 'carousel',
        contents: []
      }
    }

    for (let i = 0; i < 5; i++) {
      replies2.contents.contents.push(
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
                aspectRatio: '3:4',
                gravity: 'center'
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [],
                position: 'absolute',
                background: {
                  type: 'linearGradient',
                  angle: '0deg',
                  endColor: '#00000000',
                  startColor: '#00000099'
                },
                width: '100%',
                height: '40%',
                offsetBottom: '0px',
                offsetStart: '0px',
                offsetEnd: '0px'
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'box',
                        layout: 'horizontal',
                        contents: [
                          {
                            type: 'text',
                            text: `${$('.fg-caption').eq(i).children('h3').text().trim()}`,
                            size: 'xl',
                            color: '#ffffff',
                            style: 'italic',
                            weight: 'bold'
                          }
                        ]
                      },
                      {
                        type: 'box',
                        layout: 'horizontal',
                        contents: [
                          {
                            type: 'box',
                            layout: 'baseline',
                            contents: [
                              {
                                type: 'text',
                                text: '上映日期',
                                color: '#a9a9a9',
                                style: 'normal'
                              }
                            ],
                            spacing: 'xs'
                          }
                        ]
                      },
                      {
                        type: 'box',
                        layout: 'baseline',
                        contents: [
                          {
                            type: 'text',
                            text: `${$('.fg-caption').eq(i).find('time').text()}`,
                            style: 'italic',
                            align: 'start',
                            weight: 'bold',
                            color: '#FFFFFFCC',
                            size: 'sm',
                            margin: 'xs'
                          }
                        ],
                        spacing: 'xs'
                      },
                      {
                        type: 'button',
                        action: {
                          type: 'uri',
                          label: '影片詳情',
                          uri: 'https://www.agentm.tw' + `${$('.fg-itm').eq(i).find('a').attr('href')}`
                        },
                        style: 'secondary',
                        margin: 'none',
                        color: '#ffffffaa',
                        offsetBottom: '0%',
                        offsetTop: '60%',
                        position: 'absolute',
                        offsetEnd: '0%'
                      }
                    ],
                    spacing: 'xs'
                  }
                ],
                position: 'absolute',
                offsetBottom: '0px',
                offsetStart: '0px',
                offsetEnd: '0px',
                paddingAll: '20px'
              }
            ],
            paddingAll: '0px'
          }
        }
      )
    }
    event.reply(replies2)
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
