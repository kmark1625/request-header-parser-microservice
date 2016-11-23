function RequestParserService() {}

RequestParserService.prototype.parseRequest = function(req) {
	var language = req.acceptsLanguages()[0];
	var software = req.headers["user-agent"];
	var ipaddress = req.connection.remoteAddress;
	var result = {
	  "ipaddress": ipaddress,
	  "language": language,
	  "software": software
	}
	return result;
}

module.exports = RequestParserService;
