'use strict';

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const axios = require("axios")
const port = 3000;



app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));// 使用handlebar template

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    
    res.render('index')
});



app.post('/weather', (req, res)=>{
  const APIKEY = require('./sources/secrets.json').API_KEY;
  const cityName = req.body.cityName;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${cityName}`)
      .then(response => {
        res.render("index", {
          weatherText: `${cityName} : ${res.data.main.temp}°C`      
      })
      .catch(err => {
        res.render("index", { 
          weatherText: "City is not found!" 
        })
    })
  })

    
});

app.listen(port);