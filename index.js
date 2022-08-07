// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello bangladesh');
});

app.listen(4040, () => {
  console.log('App Is Running on 4040');
});
