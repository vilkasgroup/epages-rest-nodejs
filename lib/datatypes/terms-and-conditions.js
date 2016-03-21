var ContentObject = require('./content-object');
var util = require("util");

var TermsAndConditions = function() {
	TermsAndConditions.super_.call(this);
};

util.inherits(TermsAndConditions, ContentObject);

module.exports = TermsAndConditions;
