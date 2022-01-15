const fs = require('fs')
require('colors')

const datas = fs.readFileSync('./data/anti-emo.txt', { encoding: 'utf-8' })
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
