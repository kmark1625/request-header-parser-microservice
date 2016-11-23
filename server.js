var express = require('express')
var app = express();
var RequestParserService = require('./request-parser-service');
var requestParserService = new RequestParserService();

app.get('/', function (req, res) {
  var result = requestParserService.parseRequest(req);
  res.send(result);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
