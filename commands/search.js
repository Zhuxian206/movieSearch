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

    if ($('.fg-title').length > 8) {
      for (let i = 0; i < 8; i++) {
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
                  aspectRatio: '5:7',
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
                              text: `${$('.fg-title').eq(i).text().trim()}`,
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
                                  color: '#ccc7c5cc',
                                  size: '16px',
                                  flex: 0,
                                  align: 'end'
                                }
                              ],
                              flex: 0,
                              spacing: 'lg'
                            }
                          ]
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          contents: [
                            {
                              type: 'text',
                              text: `${$('.fg-caption').eq(i).find('time').text()}`,
                              color: '#f2eae6cc',
                              size: 'sm',
                              style: 'italic',
                              weight: 'bold'
                            }
                          ]
                        }
                      ],
                      spacing: 'xs'
                    }
                  ],
                  position: 'absolute',
                  offsetBottom: '0px',
                  offsetStart: '0px',
                  offsetEnd: '0px',
                  paddingAll: '20px',
                  height: '30%'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: '影片詳情',
                        uri: 'https://www.agentm.tw' + `${$('.fg-itm').eq(i).find('a').attr('href')}`
                      },
                      height: 'sm',
                      offsetTop: '1%',
                      color: '#ffffff'
                    }
                  ],
                  width: '40%',
                  height: '11%',
                  backgroundColor: '#848484aa',
                  position: 'absolute',
                  cornerRadius: 'lg',
                  offsetBottom: '4%',
                  offsetEnd: '7%',
                  borderWidth: '1px',
                  borderColor: '#ffffff'
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
                  aspectRatio: '5:7',
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
                              text: `${$('.fg-title').eq(i).text().trim()}`,
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
                                  color: '#ccc7c5cc',
                                  size: '16px',
                                  flex: 0,
                                  align: 'end'
                                }
                              ],
                              flex: 0,
                              spacing: 'lg'
                            }
                          ]
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          contents: [
                            {
                              type: 'text',
                              text: `${$('.fg-caption').eq(i).find('time').text()}`,
                              color: '#f2eae6cc',
                              size: 'sm',
                              style: 'italic',
                              weight: 'bold'
                            }
                          ]
                        }
                      ],
                      spacing: 'xs'
                    }
                  ],
                  position: 'absolute',
                  offsetBottom: '0px',
                  offsetStart: '0px',
                  offsetEnd: '0px',
                  paddingAll: '20px',
                  height: '30%'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: '影片詳情',
                        uri: 'https://www.agentm.tw' + `${$('.fg-itm').eq(i).find('a').attr('href')}`
                      },
                      height: 'sm',
                      offsetTop: '1%',
                      color: '#ffffff'
                    }
                  ],
                  width: '40%',
                  height: '11%',
                  backgroundColor: '#848484aa',
                  position: 'absolute',
                  cornerRadius: 'lg',
                  offsetBottom: '4%',
                  offsetEnd: '7%',
                  borderWidth: '1px',
                  borderColor: '#ffffff'
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

    for (let i = 0; i <= replies.contents.contents.length - 1; i++) {
      switch (replies.contents.contents[i].body.contents[0].url) {
        case '/static/images/database/default_movie_poster.png':
          replies.contents.contents[i].body.contents[0].url = 'https://www.agentm.tw/static/images/database/default_movie_poster.png'
          break
      }
    }
    console.log(replies)
    event.reply(replies)
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
