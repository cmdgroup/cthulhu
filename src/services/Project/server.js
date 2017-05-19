'use strict';

 const express = require('express');
 const request = require ('request')



 const PORT = 8090;


 const app = express();

 app.get('/', function (req, res) {
	    res.send('Hello from the projects service\n');
	    });


 app.get('/bidders', function (req, res) {
	    request('http://bidders:9000',function(error,response,body){
		            res.send(body);
		            });
	    });

   app.listen(PORT);
   console.log('Running on http://localhost:' + PORT);
