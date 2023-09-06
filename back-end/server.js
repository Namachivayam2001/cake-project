const express = require('express')
const path = require('path')
const app = express ()

app.use(express.static(path.join(__dirname, '..', 'front-end', 'public')))

app.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'front-end', 'index.html'));
})

app.get('/registor(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'front-end', 'registor.html'))
})

app.listen(8000, () => console.log('server listen at port 8000'))