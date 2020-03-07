'use strict'

const express = require('express');
const fetch = require('node-fetch')
const exphbs = require('express-handlebars')

const app = express();
app.engine('handlebars', exphbs());// 使用handlebar template
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');


app.get('/', (req, res)=>{
    fetch(' https://randomfox.ca/floof/')
    .then(res =>res.json())
    // No.1
    // .then(json => res.redirect(json.image))

    // No.2
    // .then(json=>{
    //     res.end(`<!DOCTYPE html>
    //         <html lang="en">
    //         <head>
    //             <meta charset="UTF-8">
    //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //             <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //             <title>Flox</title>
    //         </head>
    //         <body>
    //             <img src = ${json.image}></img>
    //             <a href = ${json.link}>next photo</a>
    //         </body>
    //         </html>`)
    // })
    .then(json => {
        res.render('index', {layout: false, imgURL: json.image})
    })



    .catch(err=>{
        console.log('error!');
        res.status = 500;
        res.end('oops')
    })


});

app.listen(3000);


