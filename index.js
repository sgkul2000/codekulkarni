const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const hbs = require('express-handlebars');
const Handlebars = require("handlebars");

const { resolve } = require('path')
const { createWriteStream } = require('fs')
const fs = require('fs')

const { SitemapStream, streamToPromise } = require('sitemap')
const { createGzip } = require('zlib')
const { Readable } = require('stream')
 

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

let sitemap
var links = [
  { url: '/',  changefreq: 'daily', priority: 1,  img: [{
    url:"/indexResources/images/profile.jpg",
    title:"Profile Photo",
    caption: "An image of Shreesh Kulkarni",
    geoLocation: "Karnataka, India"
  }, "/indexResources/images/tune-in.png", "/indexResources/images/giflab.png", "/indexResources/images/passport.png", "/indexResources/images/resume.png"] },
  { url: '/Shreesh_Kulkarni-Resume.pdf',  changefreq: 'monthly',  priority: 0.8 },
  { url: '/LOS-sigmatenant.pdf', changefreq:'monthly', priority:0.8}
]


// sitemap route
app.get('/sitemap.xml', function(req, res) {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');
  // if we have a cached entry send it
  if (sitemap) {
    res.send(sitemap)
    return
  }
 
  try {
    const smStream = new SitemapStream({ hostname: 'https://www.codekulkarni.com' })
    const pipeline = smStream.pipe(createGzip())
 
   streamToPromise(Readable.from(links).pipe(smStream)).then((data) =>{
     streamToPromise(pipeline).then(sm => sitemap = sm)
    //  console.log(data.toString())
    fs.unlink('./sitemap.xml', (err) => {
      if(err && err.message !== "ENOENT: no such file or directory, unlink './sitemap.xml'"){
        console.error(err)
      }
    })
    fs.writeFile("./sitemap.xml", data.toString(), function(err){
      if(err){
        console.error(err)
      }
      console.log("xml generation successful!")
    })
     return data.toString()
   })
    pipeline.pipe(res).on('error', (e) => {throw e})
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
})

app.get(/.*/, (req, res) => {
  res.render('index.hbs', {skills});
});
// app.use('/', routes);
port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
