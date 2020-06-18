const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const hbs = require('express-handlebars');
const Handlebars = require("handlebars");

const routes = require('./routes/routes');


const app = express();
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutDir: __dirname + '/views/layouts/', partialsDir: __dirname+'/views/partials/'}))
app.use(cors());
app.use(BodyParser.json());
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use('/', routes);
port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
