'use strict'

const express = require('express');
const fetch = require('node-fetch')

const app = express();



app.get('/', (req, res) => {
  fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.value.joke)
      res.send(data.value.joke)
      
    })
    .catch(err => res.send('Error!'));
});


app.listen(3000);
