var express = require('express')
var app = express();

app.get('/', function (req, res) {
  var language = req.acceptsLanguages()[0];
  var software = req.headers["user-agent"];
  var ipaddress = req.connection.remoteAddress;
  var result = {
    "ipaddress": ipaddress,
    "language": language,
    "software": software
  }
  res.send(result);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
