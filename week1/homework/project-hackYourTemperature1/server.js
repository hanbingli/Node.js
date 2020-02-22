'use strict'

const express = require('express');
const axios = require('axios');
const expressHandlebars = require("express-handlebars");


const app = express()
 
app.get('/', function (req, res) {
  res.send('hello from backend to frontend!')
})
 
app.listen(3000)