'use strict'

const express = require('express');
const fetch = require('node-fetch')

const api = `https://reservation100-sandbox.mxapps.io/api/reservations`

const app = express();

const guest = 
  {
    "name": "John Doe",
    "numberOfPeople": 3
  }

app.get('/', (req, res) => {
  fetch(api, {
    method: 'POST',
    body: JSON.stringify(guest),
    headers: {
        'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(res))
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log('Error!'));
});


app.listen(3000);


//don't know why it's not running
