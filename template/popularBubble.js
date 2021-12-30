export default {
  type: 'flex',
  altText: '票房清單',
  contents: {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              weight: 'bold',
              color: '#1DB446',
              size: 'sm',
              text: '★'
            },
            {
              type: 'text',
              text: '台北週末票房排行榜',
              weight: 'bold',
              size: 'xl',
              margin: 'md',
              color: '#FFFFFF'
            },
            {
              type: 'text',
              text: '統計時間：2021/12/24～2021/12/26',
              size: 'xs',
              color: '#aaaaaa',
              wrap: true,
              margin: 'none'
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '排行',
                  align: 'start',
                  gravity: 'bottom',
                  weight: 'bold',
                  style: 'italic',
                  color: '#FFFFFFaa'
                },
                {
                  type: 'text',
                  text: '片名',
                  gravity: 'bottom',
                  weight: 'bold',
                  style: 'italic',
                  align: 'end',
                  color: '#FFFFFFaa'
                }
              ],
              height: '40px',
              width: '100%'
            },
            {
              type: 'separator',
              margin: 'xs'
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
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#FFFFFF',
                      position: 'relative',
                      margin: 'none',
                      weight: 'bold',
                      align: 'start'
                    }
                  ],
                  width: '15%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingStart: '2%'
                },
                {
                  type: 'text',
                  text: '片名1',
                  weight: 'bold',
                  style: 'normal',
                  color: '#FFFFFFaa',
                  size: 'md',
                  wrap: false,
                  align: 'end'
                }
              ],
              margin: 'sm',
              spacing: 'none',
              height: '40px',
              width: '100%',
              action: {
                type: 'uri',
                label: '無',
                uri: 'http://linecorp.com/電影連結'
              },
              justifyContent: 'space-evenly',
              alignItems: 'center'
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
                      type: 'text',
                      text: '2',
                      size: 'sm',
                      color: '#FFFFFF',
                      position: 'relative',
                      margin: 'none',
                      weight: 'bold',
                      align: 'start'
                    }
                  ],
                  width: '15%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingStart: '2%'
                },
                {
                  type: 'text',
                  text: '片名2',
                  weight: 'bold',
                  style: 'normal',
                  color: '#FFFFFFaa',
                  size: 'md',
                  wrap: false,
                  align: 'end'
                }
              ],
              margin: 'sm',
              spacing: 'none',
              height: '40px',
              width: '100%',
              action: {
                type: 'uri',
                label: '無',
                uri: 'http://linecorp.com/電影連結'
              },
              justifyContent: 'space-evenly',
              alignItems: 'center'
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
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#FFFFFF',
                      position: 'relative',
                      margin: 'none',
                      weight: 'bold',
                      align: 'start'
                    }
                  ],
                  width: '15%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingStart: '2%'
                },
                {
                  type: 'text',
                  text: '片名3',
                  weight: 'bold',
                  style: 'normal',
                  color: '#FFFFFFaa',
                  size: 'md',
                  wrap: false,
                  align: 'end'
                }
              ],
              margin: 'sm',
              spacing: 'none',
              height: '40px',
              width: '100%',
              action: {
                type: 'uri',
                label: '無',
                uri: 'http://linecorp.com/電影連結'
              },
              justifyContent: 'space-evenly',
              alignItems: 'center'
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
                      type: 'text',
                      text: '4',
                      size: 'sm',
                      color: '#FFFFFF',
                      position: 'relative',
                      margin: 'none',
                      weight: 'bold',
                      align: 'start'
                    }
                  ],
                  width: '15%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingStart: '2%'
                },
                {
                  type: 'text',
                  text: '片名4',
                  weight: 'bold',
                  style: 'normal',
                  color: '#FFFFFFaa',
                  size: 'md',
                  wrap: false,
                  align: 'end'
                }
              ],
              margin: 'sm',
              spacing: 'none',
              height: '40px',
              width: '100%',
              action: {
                type: 'uri',
                label: '無',
                uri: 'http://linecorp.com/電影連結'
              },
              justifyContent: 'space-evenly',
              alignItems: 'center'
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
                      type: 'text',
                      text: '5',
                      size: 'sm',
                      color: '#FFFFFF',
                      position: 'relative',
                      margin: 'none',
                      weight: 'bold',
                      align: 'start'
                    }
                  ],
                  width: '15%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingStart: '2%'
                },
                {
                  type: 'text',
                  text: '片名5',
                  weight: 'bold',
                  style: 'normal',
                  color: '#FFFFFFaa',
                  size: 'md',
                  wrap: false,
                  align: 'end'
                }
              ],
              margin: 'sm',
              spacing: 'none',
              height: '40px',
              width: '100%',
              action: {
                type: 'uri',
                label: '無',
                uri: 'http://linecorp.com/電影連結'
              },
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }
          ]
        },
        styles: {
          body: {
            backgroundColor: '#363636'
          },
          footer: {
            separator: true
          }
        }
      },
      {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              weight: 'bold',
              color: 'red',
              size: 'sm',
              text: '★'
            },
            {
              type: 'text',
              text: '全美週末票房排行榜',
              weight: 'bold',
              size: 'xl',
              margin: 'md',
              color: '#FFFFFF'
            },
            {
              type: 'text',
              text: '統計時間：2021/12/24～2021/12/26',
              size: 'xs',
              color: '#aaaaaa',
              wrap: true,
              margin: 'none'
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '排行',
                  align: 'start',
                  gravity: 'bottom',
                  weight: 'bold',
                  style: 'italic',
                  color: '#FFFFFFaa'
                },
                {
                  type: 'text',
                  text: '片名',
                  gravity: 'bottom',
                  weight: 'bold',
                  style: 'italic',
                  align: 'end',
                  color: '#FFFFFFaa'
                }
              ],
              height: '40px',
              width: '100%'
            },
            {
              type: 'separator',
              margin: 'xs'
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
                      type: 'text',
                      text: '1',
                      size: 'sm',
                      color: '#FFFFFF',
                      position: 'relative',
                      margin: 'none',
                      weight: 'bold',
                      align: 'start'
                    }
                  ],
                  width: '15%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingStart: '2%'
                },
                {
                  type: 'text',
                  text: '片名1',
                  weight: 'bold',
                  style: 'normal',
                  color: '#FFFFFFaa',
                  size: 'md',
                  wrap: false,
                  align: 'end'
                }
              ],
              margin: 'sm',
              spacing: 'none',
              height: '40px',
              width: '100%',
              action: {
                type: 'uri',
                label: '無',
                uri: 'http://linecorp.com/電影連結'
              },
              justifyContent: 'space-evenly',
              alignItems: 'center'
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
                      type: 'text',
                      text: '2',
                      size: 'sm',
                      color: '#FFFFFF',
                      position: 'relative',
                      margin: 'none',
                      weight: 'bold',
                      align: 'start'
                    }
                  ],
                  width: '15%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingStart: '2%'
                },
                {
                  type: 'text',
                  text: '片名2',
                  weight: 'bold',
                  style: 'normal',
                  color: '#FFFFFFaa',
                  size: 'md',
                  wrap: false,
                  align: 'end'
                }
              ],
              margin: 'sm',
              spacing: 'none',
              height: '40px',
              width: '100%',
              action: {
                type: 'uri',
                label: '無',
                uri: 'http://linecorp.com/電影連結'
              },
              justifyContent: 'space-evenly',
              alignItems: 'center'
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
                      type: 'text',
                      text: '3',
                      size: 'sm',
                      color: '#FFFFFF',
                      position: 'relative',
                      margin: 'none',
                      weight: 'bold',
                      align: 'start'
                    }
                  ],
                  width: '15%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingStart: '2%'
                },
                {
                  type: 'text',
                  text: '片名3',
                  weight: 'bold',
                  style: 'normal',
                  color: '#FFFFFFaa',
                  size: 'md',
                  wrap: false,
                  align: 'end'
                }
              ],
              margin: 'sm',
              spacing: 'none',
              height: '40px',
              width: '100%',
              action: {
                type: 'uri',
                label: '無',
                uri: 'http://linecorp.com/電影連結'
              },
              justifyContent: 'space-evenly',
              alignItems: 'center'
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
                      type: 'text',
                      text: '4',
                      size: 'sm',
                      color: '#FFFFFF',
                      position: 'relative',
                      margin: 'none',
                      weight: 'bold',
                      align: 'start'
                    }
                  ],
                  width: '15%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingStart: '2%'
                },
                {
                  type: 'text',
                  text: '片名4',
                  weight: 'bold',
                  style: 'normal',
                  color: '#FFFFFFaa',
                  size: 'md',
                  wrap: false,
                  align: 'end'
                }
              ],
              margin: 'sm',
              spacing: 'none',
              height: '40px',
              width: '100%',
              action: {
                type: 'uri',
                label: '無',
                uri: 'http://linecorp.com/電影連結'
              },
              justifyContent: 'space-evenly',
              alignItems: 'center'
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
                      type: 'text',
                      text: '5',
                      size: 'sm',
                      color: '#FFFFFF',
                      position: 'relative',
                      margin: 'none',
                      weight: 'bold',
                      align: 'start'
                    }
                  ],
                  width: '15%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingStart: '2%'
                },
                {
                  type: 'text',
                  text: '片名5',
                  weight: 'bold',
                  style: 'normal',
                  color: '#FFFFFFaa',
                  size: 'md',
                  wrap: false,
                  align: 'end'
                }
              ],
              margin: 'sm',
              spacing: 'none',
              height: '40px',
              width: '100%',
              action: {
                type: 'uri',
                label: '無',
                uri: 'http://linecorp.com/電影連結'
              },
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }
          ]
        },
        styles: {
          body: {
            backgroundColor: '#363636'
          },
          footer: {
            separator: true
          }
        }
      }
    ]
  }
}
