// import flex from './template/flex.js'
import popularBubble from './template/popularBubble.js'

// nodejs 內建的，不用裝
// import util from 'util'
import fs from 'fs'

// flex.altText = 'abc'

fs.writeFileSync('./testpa.json', JSON.stringify(popularBubble, null, 2))

// console.log(util.inspect(flex, true, null))
