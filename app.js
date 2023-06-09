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

app.get('/log', (req, res) => {
  res.render('login.ejs')
})

app.get('/reg', (req, res) => {
  res.render('reguster.ejs')
})

app.get('/find', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/templates/SoliBusca.html'))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})