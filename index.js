const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const hbs = require('express-handlebars');
const Handlebars = require("handlebars");

// const routes = require('./routes/routes');
const skills = require('./public/skill.json');

const app = express();

Handlebars.registerHelper('skillLevel', (level) => {
  return (100 - (level*10));
})


app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutDir: __dirname + '/views/layouts/', partialsDir: __dirname+'/views/partials/'}))


app.use(cors());
app.use(BodyParser.json());
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.get(/.*/, (req, res) => {
  res.render('index.hbs', {skills});
});
// app.use('/', routes);
port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
