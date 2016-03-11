var http = require("http");

var HTTP = function(Shop) {
	Shop.prototype.request = function(path, options, callback) {
		var self = this;
		callback(null, "request to " + self.host);
	};
};

module.exports = HTTP;
