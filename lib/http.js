var https = require("https");

var HTTP = function(Shop) {
	Shop.prototype.request = function(path, opts, callback) {
		var self = this;
		var opts = opts || {};

		// compile options
		var options = {};

		var host = (opts.apiurl || self.apiurl).replace("https://", "").replace("http://", "");
		var index = host.indexOf("/rs");
		options.host = host.substr(0, index);
		options.method = opts.method || "GET";
		options.port = opts.port || 443;
		options.path = host.substr(index, host.length-index) + path;
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
		https.request(options, function(response) {
			var str = '';

			response.on("data", function(chunk) {
				str += chunk;
			});

			response.on("end", function() {
				callback(null, JSON.parse(str));
			});
		}).end();
	};
};

module.exports = HTTP;
