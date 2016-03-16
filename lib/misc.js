var _getCurrencies = function(shop, callback) {
	shop.request("/currencies", {}, function(err, response) {
		callback(err, response);
	});	
};

var _getLocales = function(shop, callback) {
	shop.request("/locales", {}, function(err, response) {
		callback(err, response);
	});	
};

var Misc = function(Shop) {
	Shop.prototype.getDefaultCurrency = function(callback) {
		_getCurrencies(this, function(err, data) {
			callback(err, data["default"]);
		});
	};

	Shop.prototype.getCurrencies = function(callback) {
		_getCurrencies(this, function(err, data) {
			callback(err, data["items"]);
		});
	};

	Shop.prototype.getDefaultLocale = function(callback) {
		_getLocales(this, function(err, data) {
			callback(err, data["default"]);
		});
	};

	Shop.prototype.getLocales = function(callback) {
		_getLocales(this, function(err, data) {
			callback(err, data["items"]);
		});
	};
};

module.exports = Misc;


