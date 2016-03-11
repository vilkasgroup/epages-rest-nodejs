var Shop = require('../index');
Shop.prototype.debug = true;

var shop = new Shop("https://sandbox.epages.com/rs/shops/EpagesDevD20160128T103721R105", "jnTWvyKkyHQQmlRIZedHe2NrWPRa0qlv", true);
shop.log("foo");
shop.log([1, 2, 3]);
shop.log(1, 2, 3);

shop.getCurrencies(function(err, currencies) {
	shop.log(currencies);
});

