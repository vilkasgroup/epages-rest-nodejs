var https = require("https");

var request = function(shop, method, path, opts, callback) {
	var opts = opts || {};

	// parse host a bit
	var host = shop.apiurl.replace("https://", "").replace("http://", "");
	var index = host.indexOf("/rs");

	// compile options
	var options = {
		"host": host.substr(0, index),
		"method": opts.method || "GET",
		"port": 443,
		"path": host.substr(index, host.length-index) + path,
		"header": {
			"Accept": "application/vnd.epages.v1+json",
			"Authorization": "Bearer " + shop.authtoken,
			"Content-Type": "application/json"
		}
	};

	// overrire or add headers
	if(opts.headers) {
		for(var key in opts.headers) {
			options.headers[key] = opts.headers[key];
		}
	}

	// actual request
	var req = https.request(options, function(response) {
		var str = '';

		response.on("data", function(chunk) {
			str += chunk;
		});

		response.on("end", function() {
			shop.log(str);
			callback(null, JSON.parse(str));
		});
	});


	// send data, if applicable
	if(opts.data && options.method != "GET") {
		var d = JSON.stringify(opts.data);
		shop.log("writing data: ", d);
		req.write(d);
	}

	// end request
	req.end();
};

var HTTP = function(shop) {
	var self = this;
	self["get"] = function(path, opts, callback) {
		request(shop, "GET", path, opts, callback);
	};
	self["post"] = function(path, opts, callback) {
		request(shop, "POST", path, opts, callback);
	};
	self["put"] = function(path, opts, callback) {
		request(shop, "PUT", path, opts, callback);
	};
	self["delete"] = function(path, opts, callback) {
		request(shop, "DELETE", path, opts, callback);
	};
	self["patch"] = function(path, opts, callback) {
		request(shop, "PATCH", path, opts, callback);
	};
};

module.exports = HTTP;