var ContentObject = require('./content-object');
var util = require("util");

var ShippingInformation = function() {
	ShippingInformation.super_.call(this);
};

util.inherits(ShippingInformation, ContentObject);

module.exports = ShippingInformation;