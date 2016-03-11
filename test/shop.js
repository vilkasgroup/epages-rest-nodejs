var Shop = require('../index');
Shop.prototype.debug = true;

var shop = new Shop("host", "shop", "authtoken", true);
shop.log("foo");
shop.log([1, 2, 3]);
shop.log(1, 2, 3);
