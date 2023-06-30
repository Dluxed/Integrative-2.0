//requerimos el modulo de express
const express = require('express'); 
const path = require("path");
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


// Initializations
const app = express(); 
require('./dbconnection.js');
const port = 3000;
require('./src/passport/local-auth.js'); //Sin esto no jala la validacion, creo que es para activar el intercambio de sesiones en todas las paginas, igual que passport

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
//Opciones, no se que hacen, no mover :3
app.use(session({
  secret: 'SuicideZanero', //Clave adicional de seguridad
  resave: false, 
  saveUninitialized: false
}));
app.use(flash()); //Tiene que ir de ahuevo despues de sesiones para enviar datos y antes de passport para ser usado
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => { //Mensajs de error
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.signinMessage = req.flash('signinMessage');
  app.locals.user = req.user;
  next();
});

//-------------   ROUTES   ---------------------
app.use('/', require('./src/routes/index.js'));

//Comprobacion del estado del servidor local
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})
