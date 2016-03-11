var Misc = function(Shop) {
	Shop.prototype.getCurrencies = function(callback) {
		var self = this;
		self.request("/currencies", { port: 443 }, function(err, response) {
			self.log(JSON.stringify(response));
		});
	};
};

module.exports = Misc;


