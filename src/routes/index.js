const express = require('express');
const router  = express.Router();
const passport = require('passport');

//-----------   Redirecciones del servidor  -------------------
router.get('/', (req, res) => {
    res.render('home.ejs');
  });
  
  router.get('/log', (req, res) => {
    res.render('login.ejs');
  });
  
  router.post('/log', passport.authenticate('local-signin', { //Describe el metodo de autenticacion en caso de recibir una solicitud post
    successRedirect: '/',
    failureRedirect: '/log',
    passReqToCallback: true  //Sin esto no jala, no mover Xd
  }));
  
  router.get('/reg', (req, res) => {
    res.render('register.ejs');
  });
  
  router.post('/reg', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/reg',
    passReqToCallback: true
  }));
  
  router.get('/request', (req, res) => {
    res.render(path.join(__dirname + '/src/templates/SoliBusca.ejs'));
  });
  
  router.get('/find', (req, res) => {
    res.render('map.ejs');
  });
  
  module.exports = router;