//requerimos el modulo de express
const express = require('express') 
const app = express() //creando obj
const port = 3000

//El path de toda la vida
const path = require("path");

//Modulacion de vistas ejs
const engine = require('ejs-mate');
app.engine('ejs', engine);
app.set('views', __dirname + '/src/templates');

//Archivos estaticos
app.use(express.static(__dirname));

//Desmadre de POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-----------   Redirecciones del servidor  -------------------
app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.get('/log', (req, res) => {
  res.render('login.ejs')
})

app.post('/logPost', (req, res) => {
  console.log(req.body);
  console.log(req.body['usr']);
})

app.get('/reg', (req, res) => {
  res.render('register.ejs')
})

app.post('/regPost', (req, res) => {
  console.log(req.body);

})

app.get('/request', (req, res) => {
  res.render(path.join(__dirname + '/src/templates/SoliBusca.ejs'))
})

app.get('/find', (req, res) => {
  res.render('map.ejs')
})


//Comprobacion del estado del servidor local
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})