// requie all necessary modules
var url     = require('url');
const http  = require('http');
var fs      = require('fs');
var express = require('express')


// setup the express app
var app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);


// require all proximety connectors
var simpleCallBackViaMail = require('./simpleCallBackViaMail');


app.use('/assets', express.static('./src/node/assets'));
app.use('/public', express.static('./src/node/public'));

app.get('/simpleCallBackViaMail', function(req, res){
  simpleCallBackViaMail.act(req);
  // console.log(req.url);
  // console.log(req.query);
  res.send('Sent Mail');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
