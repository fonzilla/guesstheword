const fs = require('fs');
//const path = require('path');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
const randomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
}

module.exports = {
  all: words,
  randomWord: randomWord().split('')
}
