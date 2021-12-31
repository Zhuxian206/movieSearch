export default async (event) => {
  try {
    const ins = {
      type: 'flex',
      altText: '電影搜尋結果',
      contents: {
        type: 'carousel',
        contents: [
          {
            type: 'image',
            originalContentUrl: 'https://github.com/Zhuxian206/movieSearch/blob/master/images/instruction/Screenshot_20211231-094750.jpg?raw=true',
            previewImageUrl: 'https://github.com/Zhuxian206/movieSearch/blob/master/images/instruction/Screenshot_20211231-094750.jpg?raw=true'
          },
          {
            type: 'image',
            originalContentUrl: 'https://github.com/Zhuxian206/movieSearch/blob/master/images/instruction/Screenshot_20211231-095209.jpg?raw=true',
            previewImageUrl: 'https://github.com/Zhuxian206/movieSearch/blob/master/images/instruction/Screenshot_20211231-095209.jpg?raw=true'
          },
          {
            type: 'image',
            originalContentUrl: 'https://github.com/Zhuxian206/movieSearch/blob/master/images/instruction/Screenshot_20211231-094653.jpg?raw=true',
            previewImageUrl: 'https://github.com/Zhuxian206/movieSearch/blob/master/images/instruction/Screenshot_20211231-094653.jpg?raw=true'
          }
        ]
      }
    }
    event.reply(ins)
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
