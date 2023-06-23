const express = require('express');
const router  = express.Router();

//-----------   Redirecciones del servidor  -------------------
router.get('/', (req, res) => {
    res.render('home.ejs');
  });
  
  router.get('/log', (req, res) => {
    res.render('login.ejs');
  });
  
  router.post('/logPost', (req, res) => {
    console.log(req.body);
    console.log(req.body['usr']);
    res.send('recieved');
  });
  
  router.get('/reg', (req, res) => {
    res.render('register.ejs');
  });
  
  router.post('/regPost', (req, res) => {
    console.log(req.body);
  
  });
  
  router.get('/request', (req, res) => {
    res.render(path.join(__dirname + '/src/templates/request.ejs'));
  });
  
  router.get('/find', (req, res) => {
    res.render('map.ejs');
  });
  
  module.exports = router;