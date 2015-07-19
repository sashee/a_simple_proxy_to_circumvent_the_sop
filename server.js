var express = require('express');  
var request = require('request');

// Parameters
// You can use a shorthand for multiple API endpoints: /api|/other_api
var paths='/api';
var apiServerHost = 'http://echo.httpkit.com';

var pipe = function(req, res) {
  var url = apiServerHost + req.baseUrl + req.url;
  console.log('piped:'+req.baseUrl +req.url);
  req.pipe(request(url)).pipe(res);
};

var app = express();  
app.use(paths, pipe);

app.use(express.static('.'));

app.listen(process.env.PORT || 8080);
