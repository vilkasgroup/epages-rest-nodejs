var Shop = require('../index');
Shop.prototype.debug = true;

var shop = new Shop("https://sandbox.epages.com/rs/shops/EpagesDevD20160128T103721R105", "jnTWvyKkyHQQmlRIZedHe2NrWPRa0qlv", true);
shop.log("foo");
shop.log([1, 2, 3]);
shop.log(1, 2, 3);

shop.getCurrencies(function(err, currencies) {
	shop.log("currencies: " + JSON.stringify(currencies));
});

shop.getDefaultCurrency(function(err, currency) {
	shop.log("default currency: " + currency);
});

shop.getLocales(function(err, locales) {
	shop.log("locales: " + JSON.stringify(locales));
});

shop.getDefaultLocale(function(err, locale) {
	shop.log("default locale: " + locale);
});
