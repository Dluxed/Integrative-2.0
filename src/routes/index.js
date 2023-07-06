const express = require('express');
const router  = express.Router();
const passport = require('passport');
const Pet = require('../models/pets');


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
  }) );

  router.get('/logout', (req, res, next) => {
    req.logout(function (err){
      if(err) { return next(err); }
      res.redirect('/');
    });
    
  });
  
  router.get('/request',  isAuthenticated, (req, res) => {
    res.render('request.ejs');
  });

  router.post('/request', async (req, res) => {
    const newPet = new Pet();
    newPet.name = req.body.pet_name;
    newPet.charactecteristics = req.body.pet_chara;
    newPet.signals = req.body.pet_signals;
    //newPet.lastLocation = 'coordenadas del mapa'
    //newPet.numUser = 
    if(req.body.pet_angry == 'on'){
      newPet.aggressivness = true;
    } else { newPet.aggressivness = false; 
    //newPet.photo = //INSERTAR DIRECCION DE LA FOTO
    }
    await newPet.save(); 
    console.log(req.body.pet_name);
    res.send('Datos recibidos');
  })
  
  router.get('/find', (req, res) => {
    res.render('map.ejs');
  });
  
  function isAuthenticated (req, res, next) {
    if(req.isAuthenticated()){
      return next();
    } 
    res.redirect('/log');
  }

  module.exports = router;