'use strict'

const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.json());

app.listen(3000);


app.post('/blogs', (req, res) => {
    // How to get the tile and content from the request??
    fs.writeFileSync(req.body.title, req.body.content);
    res.end('ok')
})

app.put('/blogs', (req, res) => {
    // How to get the tile and content from the request??

    // shouldn't it be the opposite? When the post exists, remain the same; when it doesn't, write it in.
    if (fs.existsSync(req.body.title)) {
      
      console.log('data already exists')
      res.end('Existing file')
    }
    else {
        fs.writeFileSync(req.body.title, req.body.content);
      res.end('New file');
    }
});

app.delete('/blogs/:title', (req, res) => {
    // How to get the tilte from the url parameters?
    fs.unlinkSync(req.params.title);
    res.end('ok');
})


app.get('/blogs/:title', (req, res) => {
    // How to get the tilte from the url parameters?
    res.sendfile(req.params.title);
    res.end('getV')
})
