var http = require('http');
var send = require('send');
var url = require('url');
var path = require('path')
var fs = require('fs')
var express = require('express')()

var app = http.createServer(express).listen(8080)
express.use(function(req, res) {
  function error(err) {
    res.statusCode = err.status || 500;
    res.end(err.message);
  }
  function redirect() {
    res.statusCode = 301;
    res.setHeader('Location', req.url + '/');
    res.end('Redirecting to ' + req.url + '/');
  }
  send(req, url.parse(req.url).pathname)
    .root(path.join(__dirname, 'site'))
    .on('error', error)
    .on('directory', redirect)
    .pipe(res);
})
app.listen(8080);
