var http = require("http");

var HTTP = function(Shop) {
	Shop.prototype.request = function(path, opts, callback) {
		var self = this;
		var opts = opts || {};

		// compile options
		var options = {};
		options.host = opts.host || self.host;
		options.method = opts.method || "GET";
		options.port = opts.port || 443;
		options.path = path;
		options.headers = {
			"Accept": "application/vnd.epages.v1+json",
			"Authorization": "Bearer " + self.authtoken,
			"Content-Type": "application/json"
		};
	
		// overrire or add headers
		if(opts.headers) {
			for(var key in opts.headers) {
				options.headers[key] = opts.headers[key];
			}
		}

		// actual request
		self.log("HTTP REQUEST", JSON.stringify(options));
		http.request(options, function(response) {
			var str = '';

			response.on("data", function(chunk) {
				str += check;
			});

			response.on("end", function() {
				callback(null, JSON.encode(str));
			});
		}).end();
	};
};

module.exports = HTTP;
