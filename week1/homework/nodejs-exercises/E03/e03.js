'use strict'

var http = require('http');
const fs = require('fs');

const html = (`<html>
<head>
  <title>My First Web Server</title>
</head>
<body>
  <h1>Hello, anyone there?</h1>
  <div id="content"></div>
  <script src="script.js"></script>
</body>
</html>`)


//create a server
let server = http.createServer(function(req, res) {
    if ( req.url === '/script.js' ) {
        res.setHeader('Content-Type','text/javascript');
        res.write(`
            document.getElementById('content');
            document.appendChild(document.createTextNode('Welcome to Server-land!')`);
    } else { /* send HTML */
        res.setHeader('Content-Type','text/html')
        res.write(html);
     }

  res.end(); //end the response
});



server.listen(3000); //the server listens on port 3000