'use strict'

const express = require('express');
const fetch = require('node-fetch')
const exphbs = require('express-handlebars')

const app = express();
app.engine('handlebars', exphbs());// 使用handlebar template
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');


app.get('/:id', (req, res)=>{
    fetch(' https://randomfox.ca/floof/')
    .then(res =>res.json())
    .then(json => {
      const id = req.params.id;

      res.render(`index${id}`, {layout: false, imgURL: json.image, imgIndex: req.params.id})

    })

    .catch(err=>{
        console.log('error!');
        res.status = 500;
        res.end('oops')
    })

});

app.listen(3000);


