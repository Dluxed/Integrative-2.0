const express = require('express') //requerimos el modulo de express
const app = express() //creando obj
const port = 3000

const path = require("path");

const engine = require('ejs-mate');

app.engine('ejs', engine);
app.set('views', __dirname + '/src/templates');


app.use(express.static(path.join(__dirname, 'src')));


app.get('/', (req, res) => {
  res.render('home.ejs')
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})