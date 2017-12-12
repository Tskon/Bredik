var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res){
  console.log(req.method, req.url);

  var urlParsed = url.parse(req.url, true);

  if (urlParsed.pathname === '/echo' && urlParsed.query.message){
    res.end('All right');
  }else{
    res.end('Error 404: Page not found');
  }
  console.log(urlParsed);

});

server.listen(1337, '127.0.0.1');