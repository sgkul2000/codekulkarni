const express = require('express');
const hbs = require('express-handlebars');
const Handlebars = require("handlebars");
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.hbs', {
    title: 'home'
  });
});
router.get('/test', (req, res) => {
  res.render('test.hbs', {
    title: 'test'
  });
});

module.exports = router
