var ContentObject = require('./content-object');
var util = require("util");

var PrivacyPolicy = function() {
	PrivacyPolicy.super_.call(this);
};

util.inherits(PrivacyPolicy, ContentObject);

module.exports = PrivacyPolicy;