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

  router.get('/logout', (req, res, next) => {
    req.logout(function (err){
      if(err) { return next(err); }
      res.redirect('/');
    });
    
  });
  
  router.get('/request', (req, res) => {
    res.render('request.ejs'));
  });
  
  router.get('/find', isAuthenticated, (req, res) => {
    res.render('map.ejs');
  });
  
  function isAuthenticated (req, res, next) {
    if(req.isAuthenticated()){
      return next();
    } 
    res.redirect('/log');
  }

  module.exports = router;