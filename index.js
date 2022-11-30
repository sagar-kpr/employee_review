const express = require('express');
const port = 1000;
const app = express();
const layouts = require('express-ejs-layouts');
const parser = require('body-parser');
const sass = require('node-sass-middleware');
const path = require('path');

//for using sass
app.use(sass({
    src: path.join(__dirname, './assets', 'scss'),
    dest: path.join(__dirname, './assets', 'css'),
    outputStyle:  'expanded',
    prefix: '/css'
}));


app.use(parser.urlencoded({extended: false}));

//used static files in assets 
app.use(express.static('./assets'));

//used express layouts 
app.use(layouts);

//setup of ejs file to be used as a view engine 
app.set('view engine', 'ejs');

//setup of ejs files to be view in 'views' folder
app.set('views', './views')

//setup of express layouts after using in app
app.set('layout extractStyles', true);
app.set('layout extractScripts', true)


//used routes
app.use('/', require('./routes/index'));

//listening to port
app.listen(port, (err) => {
    if(err) { console.log('err in port'); return}

    console.log('express is running ')
} );