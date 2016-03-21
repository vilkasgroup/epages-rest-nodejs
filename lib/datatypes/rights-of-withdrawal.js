var ContentObject = require('./content-object');
var util = require("util");

var RightsOfWithdrawal = function() {
	RightsOfWithdrawal.super_.call(this);
};

util.inherits(RightsOfWithdrawal, ContentObject);

module.exports = RightsOfWithdrawal;
