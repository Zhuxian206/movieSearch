export default {
  type: 'flex',
  altText: '周末票房資訊',
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
              text: '★',
              weight: 'bold',
              color: '#1BBC9B',
              size: 'sm'
            },
            {
              type: 'text',
              text: '台北週末票房排行',
              weight: 'bold',
              size: 'xl',
              margin: 'md',
              color: '#fcf3e0',
              style: 'italic'
            },
            {
              type: 'text',
              text: '統計時間 2021-12-24~2021-12-26',
              size: 'xs',
              color: '#aaaaaa',
              wrap: true
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'md',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: '排名',
                      size: 'md',
                      color: '#EFC164',
                      flex: 0,
                      gravity: 'bottom',
                      weight: 'bold',
                      style: 'italic'
                    },
                    {
                      type: 'text',
                      text: '片名',
                      size: 'md',
                      color: '#EFC164',
                      align: 'center',
                      weight: 'bold',
                      style: 'italic'
                    }
                  ],
                  action: {
                    type: 'uri',
                    label: 'action',
                    uri: 'http://linecorp.com/'
                  }
                }
              ],
              height: '30px',
              justifyContent: 'flex-end'
            },
            {
              type: 'separator',
              margin: 'none'
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '1  ',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],
                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '6',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '7',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '8',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '9',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '10',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            }
          ],
          backgroundColor: '#849ebf',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            startColor: '#000000',
            endColor: '#302424'
          }
        },
        styles: {
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
              text: '★',
              weight: 'bold',
              color: '#F35955',
              size: 'sm'
            },
            {
              type: 'text',
              text: '美國週末票房排行',
              weight: 'bold',
              size: 'xl',
              margin: 'md',
              color: '#fcf3e0',
              style: 'italic'
            },
            {
              type: 'text',
              text: '統計時間 2021-12-24~2021-12-26',
              size: 'xs',
              color: '#aaaaaa',
              wrap: true
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'md',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: '排名',
                      size: 'md',
                      color: '#EFC164',
                      flex: 0,
                      gravity: 'bottom',
                      weight: 'bold',
                      style: 'italic'
                    },
                    {
                      type: 'text',
                      text: '片名',
                      size: 'md',
                      color: '#EFC164',
                      align: 'center',
                      weight: 'bold',
                      style: 'italic'
                    }
                  ],
                  action: {
                    type: 'uri',
                    label: 'action',
                    uri: 'http://linecorp.com/'
                  }
                }
              ],
              height: '30px',
              justifyContent: 'flex-end'
            },
            {
              type: 'separator',
              margin: 'none'
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '1  ',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '6',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '7',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '8',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],

                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '9',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],
                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
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
                          text: '10',
                          size: 'sm',
                          color: '#ffffffcc',
                          flex: 0,
                          weight: 'bold'
                        }
                      ],
                      height: '100%',
                      width: '20%',
                      position: 'relative',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      offsetStart: '10px'
                    },
                    {
                      type: 'text',
                      text: '法蘭西 Dispatch',
                      size: 'md',
                      color: '#ffffffcc',
                      align: 'start',
                      weight: 'regular'
                    }
                  ],
                  height: '30px',
                  alignItems: 'center'
                }
              ],
              action: {
                type: 'uri',
                label: '網頁連結',
                uri: 'http://linecorp.com/'
              }
            }
          ],
          backgroundColor: '#849ebf',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            startColor: '#000000',
            endColor: '#302424'
          }
        },
        styles: {
          footer: {
            separator: true
          }
        }
      }
    ]
  }
}
