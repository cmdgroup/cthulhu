 'use strict';
 const express = require('express');
 const request = require('request')
 const PORT = 9000;
 const app = express();
 app.get('/', function (req, res) {
    res.send('Hello from bidders service\n');
   });
 app.listen(PORT);
 console.log('Running on http://localhost:' + PORT);
