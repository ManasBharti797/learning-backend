require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.send('Manasbhartigithubcom')
  })
app.get('/twitter', (req, res) => {
    res.send('Manasbhartitwittercom')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})