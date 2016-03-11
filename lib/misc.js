var Misc = function(Shop) {
	Shop.prototype.getCurrencies = function(callback) {
		var self = this;
		self.request("/dummy/path", null, function(err, response) {
			self.log("list of currencies here!");
		});
	};
};

module.exports = Misc;


