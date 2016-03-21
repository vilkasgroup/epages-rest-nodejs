var PrivacyPolicy = require("../datatypes/privacy-policy");
var TermsAndConditions = require("../datatypes/terms-and-conditions");
var RightsOfWithdrawal = require("../datatypes/rights-of-withdrawal");
var ShippingInformation = require("../datatypes/shipping-information");
var ContactInformation = require("../datatypes/contact-information");

var Legal = function(shop) {
	// getContactInformation(locale, callback)
	this.getContactInformation = function(locale, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				}
			};
			shop.http.get("/legal/contact-information", options, function(err, response) {
				var contactInformation = new ContactInformation();
				contactInformation.fromJSON(response);
				callback(err, contactInformation);
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

	// setContactInformation(locale, json, callback)
	this.setContactInformation = function(locale, contactInformation, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				},
				"data": contactInformation.toJSON()
			};
			shop.http.put("/legal/contact-information", options, function(err, response) {
				callback(err);
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

	// =========================================================================================

	// getPrivacyPolicy(locale, callback)
	this.getPrivacyPolicy = function(locale, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				}
			};
			shop.http.get("/legal/privacy-policy", options, function(err, response) {
				var privacyPolicy = new PrivacyPolicy();
				privacyPolicy.fromJSON(response);
				callback(err, privacyPolicy);
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

	// setPrivacyPolicy(locale, callback)
	this.setPrivacyPolicy = function(locale, privacyPolicy, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				},
				"data": privacyPolicy.toJSON()
			};
			shop.http.put("/legal/privacy-policy", options, function(err, response) {
				callback(err);
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

	// =========================================================================================

	// getTermsAndConditions(locale, callback)
	this.getTermsAndConditions = function(locale, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				}
			};
			shop.http.get("/legal/terms-and-conditions", options, function(err, response) {
				var termsAndConditions = new TermsAndConditions();
				termsAndConditions.fromJSON(response);
				callback(err, termsAndConditions);
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

	// setTermsAndConditions(locale, data, callback)
	this.setTermsAndConditions = function(locale, termsAndConditions, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				},
				"data": termsAndConditions.toJSON()
			};
			shop.http.put("/legal/terms-and-conditions", options, function(err, response) {
				callback(err);
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

	// =========================================================================================

	// getRightsOfWithdrawal(locale, callback)
	this.getRightsOfWithdrawal = function(locale, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				}
			};
			shop.http.get("/legal/rights-of-withdrawal", options, function(err, response) {
				var rightsOfWithdrawal = new RightsOfWithdrawal();
				rightsOfWithdrawal.fromJSON(response);
				callback(err, rightsOfWithdrawal);
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

	// setRightsOfWithdrawal(locale, data, callback)
	this.setRightsOfWithdrawal = function(locale, rightsOfWithdrawal, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				},
				"data": rightsOfWithdrawal.toJSON()
			};
			shop.http.put("/legal/rights-of-withdrawal", options, function(err, response) {
				callback(err);
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

	// =========================================================================================

	// getShippingInformation(locale, callback)
	this.getShippingInformation = function(locale, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				}
			};
			shop.http.get("/legal/shipping-information", options, function(err, response) {
				var shippingInformation = new ShippingInformation();
				shippingInformation.fromJSON(response);
				callback(err, shippingInformation);
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

	// setShippingInformation(locale, data, callback)
	this.setShippingInformation = function(locale, shippingInformation, callback) {
		var fn = function(err, lcl) {
			var options = {
				"search": {
					"locale": lcl
				},
				"data": shippingInformation.toJSON()
			};
			shop.http.put("/legal/shipping-information", options, function(err, response) {
				callback(err);
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
