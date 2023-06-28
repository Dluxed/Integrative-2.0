//requerimos el modulo de express
const express = require('express'); 
const path = require("path");
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

// Initializations
const app = express(); 
require('./dbconnection.js');
const port = 3000;
require('./src/passport/local-auth.js');

//Modulacion de vistas ejs
const engine = require('ejs-mate');
app.engine('ejs', engine);
app.set('views', path.join( __dirname + '/src/templates'));

//Archivos estaticos
app.use(express.static(__dirname));


//-------------   MIDDLEWARE   ---------------------
app.use(morgan('dev'));  //muestra datos de las peticiones del servidor
//Desmadre de POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'SuicideZanero',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//-------------   ROUTES   ---------------------
app.use('/', require('./src/routes/index.js'));

//Comprobacion del estado del servidor local
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})

//connection.connect();
