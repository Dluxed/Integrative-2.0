//requerimos el modulo de express
const express = require('express'); 
const path = require("path");
const engine = require('ejs-mate');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
const fuleUpload = require('express-fileupload');
const fileUpload = require('express-fileupload');

//Inicializacion
const app = express();
require('./dbconnection');
require('./src/passport/local-auth');


//Settings
const port = process.env.PORT || 3000;
app.set('views', path.join( __dirname + '/src/templates'));
app.engine('ejs', engine);
app.use(express.static(__dirname));


//-------------   MIDDLEWARE   ---------------------
app.use(morgan('dev'));  //muestra datos de las peticiones del servidor
//Desmadre de POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload( {
  limits: {fileSize: 10000000},
  abortOnLimit: true,
} ));

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
