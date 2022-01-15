const fs = require('fs')
const path = require('path')
require('colors')

const datas = fs.readFileSync(path.join(__dirname, './data/anti-emo.txt'), { encoding: 'utf-8' })
const sentences = datas.split('\n')

function getRandomSentence () {
  return sentences[Math.floor(Math.random() * sentences.length)]
}

module.exports = Object.create(console, {
  log: {
    value: function (message, ...args) {
      console.log(message)
      console.log(getRandomSentence().rainbow)
    },
    configurable: true,
    enumerable: true,
    writable: true
  }
})
