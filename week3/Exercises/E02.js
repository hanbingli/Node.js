'use strict'

const express = require('express');
const fetch = require('node-fetch')

const api = `https://restapiabasicauthe-sandbox.mxapps.io/api/books`

const app = express();



app.get('/', (req, res) => {
  fetch(api, { headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }})
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send(data)
    })
    .catch(err => res.send('Error!'));
});


app.listen(3000);
