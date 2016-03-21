var https = require("https");
var zlib = require('zlib');

var request = function(shop, method, path, opts, callback) {
	var opts = opts || {};

	// parse host a bit
	var host = shop.apiurl.replace("https://", "").replace("http://", "");
	var index = host.indexOf("/rs");

	// compile options
	var options = {
		"host": host.substr(0, index),
		"method": method || "GET",
		"port": 443,
		"path": host.substr(index, host.length-index) + path,
		"headers": {
			"Accept": "application/vnd.epages.v1+json",
			"Authorization": "Bearer " + shop.authtoken,
			"Content-Type": "application/json",
			"Accept-Encoding": "gzip, deflate"
		}
	};

	// overrire or add headers
	if(opts.headers) {
		for(var key in opts.headers) {
			options.headers[key] = opts.headers[key];
		}
	}

	// add search
	if(opts.search) {
		var arr = [];
		for(var key in opts.search) {
			arr.push(key + "=" + opts.search[key]);
		}
		options.path = options.path + "?" + arr.join("&");
	}

	// actual request
	var req = https.request(options, function(response) {
		shop.log(options.method, response.statusCode, options.path);
		
		var chunks = [];

		response.on("data", function(chunk) {
			chunks.push(chunk);
		});

		response.on("end", function() {
			var status = response.statusCode;
	
			// create buffer from chunks
			var buffer = Buffer.concat(chunks);
			var encoding = response.headers['content-encoding'];

			// callback handler
			var fn = function(err, data) {
				shop.log(data);
				if(status == 200 || status == 201) {
					data = JSON.parse(data);
				}
				callback(err, data);				
			};

			// parse response encoding
			var data = null;
			if (encoding == 'gzip') {
				zlib.gunzip(buffer, function(err, decoded) {
					fn(err, decoded && decoded.toString());
				});
			} else if (encoding == 'deflate') {
				zlib.inflate(buffer, function(err, decoded) {
					fn(err, decoded && decoded.toString());
				})
			} else {
				fn(null, buffer.toString());
			}
		});
	});


	// send data, if applicable
	if(opts.data && options.method != "GET") {
		var d = JSON.stringify(opts.data);
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