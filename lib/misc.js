var _getCurrencies = function(shop, callback) {
	shop.http.get("/currencies", {}, function(err, response) {
		callback(err, response);
	});	
};

var _getLocales = function(shop, callback) {
	shop.http.get("/locales", {}, function(err, response) {
		callback(err, response);
	});	
};

var Misc = function(shop) {
	this.getDefaultCurrency = function(callback) {
		_getCurrencies(shop, function(err, data) {
			callback(err, data["default"]);
		});
	};

	this.getCurrencies = function(callback) {
		_getCurrencies(shop, function(err, data) {
			callback(err, data["items"]);
		});
	};

	this.getDefaultLocale = function(callback) {
		_getLocales(shop, function(err, data) {
			callback(err, data["default"]);
		});
	};

	this.getLocales = function(callback) {
		_getLocales(shop, function(err, data) {
			callback(err, data["items"]);
		});
	};
};

module.exports = Misc;


