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
  
  router.post('/log', (req, res) => {
    console.log(req.body);
    console.log(req.body['usr']);
    res.send('recieved');
  });
  
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