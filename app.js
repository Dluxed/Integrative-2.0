const express = require('express') //requerimos el modulo de express
const app = express() //creando obj
const port = 3000
const path = require("path")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname + '/home.html'))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})