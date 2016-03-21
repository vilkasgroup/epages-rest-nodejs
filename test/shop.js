var Shop = require('../index');
Shop.prototype.debug = true;

var shop = new Shop("https://sandbox.epages.com/rs/shops/EpagesDevD20160128T103721R105", "XWf8GiLmBLsD15UtIS6a64RAbrNepkfX", true);
//shop.log("foo");
/*shop.log([1, 2, 3]);
shop.log(1, 2, 3);*/

/*shop.misc.getLocales(function(err, locales) {
	shop.log("locales", locales);
});*/

/*shop.misc.getCurrencies(function(err, currencies) {
	shop.log("currencies", currencies);
});

shop.misc.getDefaultCurrency(function(err, currency) {
	shop.log("default currency", currency);
});


shop.misc.getDefaultLocale(function(err, locale) {
	shop.log("default locale", locale);
});*/

shop.log("==========================================================");
shop.legal.getPrivacyPolicy(null, function(err, privacyPolicy) {
	shop.log("A: name = " + privacyPolicy.getName());
	privacyPolicy.setName(Date.now().toString());
	shop.legal.setPrivacyPolicy(null, privacyPolicy, function(err) {
		shop.legal.getPrivacyPolicy(null, function(err, privacyPolicy) {
			shop.log("B: name = " + privacyPolicy.getName());
		})
	});
});