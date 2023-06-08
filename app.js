const express = require('express') //requerimos el modulo de express
const app = express() //creando obj
const port = 3000
const path = require("path")

app.use(express.static(path.join(__dirname, 'src')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/templates/home.html'))
})

app.get('/hi', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/templates/hola.html'))
})

app.get('/log', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/templates/login.html'))
})

app.get('/reg', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/templates/register.html'))
})

app.get('/find', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/templates/SoliBusca.html'))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})