export default async (event) => {
  try {
    const ins = [
      {
        type: 'image',
        originalContentUrl: 'https://github.com/Zhuxian206/movieSearch/blob/master/images/alex-litvin-MAYsdoYpGuk-unsplash.jpg?raw=true',
        previewImageUrl: 'https://github.com/Zhuxian206/movieSearch/blob/master/images/alex-litvin-MAYsdoYpGuk-unsplash.jpg?raw=true'
      }
    ]
    event.reply(ins)
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
