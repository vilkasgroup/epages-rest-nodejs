var Legal = function(shop) {
	// getContactInformation(locale, callback) or getContactInformation(callback)
	this.getContactInformation = function(locale, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				}
			};
			shop.http.get("/legal/contact-information", options, function(err, response) {
				callback(response);
			});
		};

		if(!locale) {
			// no locale given, fetch default
			shop.misc.getDefaultLocale(function(err, locale) {
				fn(err, locale);
			});
		} else {
			fn(null, locale);
		}
	};

	// setContactInformation(locale, json, callback) or getContactInformation(json, callback)
	this.setContactInformation = function(locale, contactInformation, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				},
				"data": contactInformation
			};
			shop.http.put("/legal/contact-information", options, function(err, response) {
				callback(response);
			});
		};

		if(!locale) {
			// no locale given, fetch default
			shop.misc.getDefaultLocale(function(err, locale) {
				fn(err, locale);
			});
		} else {
			fn(null, locale);
		}
	};

	// getPrivacyPolicy(locale, callback) or getPrivacyPolicy(callback)
	this.getPrivacyPolicy = function(locale, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				}
			};
			shop.http.get("/legal/privacy-policy", options, function(err, response) {
				callback(response);
			});
		};

		if(!locale) {
			// no locale given, fetch default
			shop.misc.getDefaultLocale(function(err, locale) {
				fn(err, locale);
			});
		} else {
			fn(null, locale);
		}
	};
};

module.exports = Legal;
