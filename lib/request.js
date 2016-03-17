var https = require("https");

var request = function(method, path, opts, callback) {
	var self = this;
	var opts = opts || {};

	// compile options
	var options = {};

	var host = (opts.apiurl || self.apiurl).replace("https://", "").replace("http://", "");
	var index = host.indexOf("/rs");
	options.host = host.substr(0, index);
	options.method = method || "GET";
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

var Http = function(shop) {
	shop.request  = {};
	shop.request["get"] = function(path, opts, callback) {
		request("GET", path, opts, callback);
	}
	shop.request["post"] = function(path, opts, callback) {
		request("POST", path, opts, callback);
	}
	shop.request["put"] = function(path, opts, callback) {
		request("PUT", path, opts, callback);
	}
	shop.request["delete"] = function(path, opts, callback) {
		request("DELETE", path, opts, callback);
	}
	shop.request["patch"] = function(path, opts, callback) {
		request("PATCH", path, opts, callback);
	}
};

module.exports = Http;
