const express = require('express');
const responseTime = require('response-time')

const app = express();

app.use(responseTime(function(req, res, time){
    console.log('time', time);
   
}))

app.get ('/', (req, res)=> {
    res.send('hello, world')
})

app.listen(3000);