'use strict';

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;

app.listen(port)


app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));// 使用handlebar template

app.get('/', (req, res)=>{
    
    res.render('index')
});

app.use(express.urlencoded({ extended: true }));

app.post('/weather', (req, res)=>{
    const cityName = req.body.cityName;
    res.send(cityName)
});