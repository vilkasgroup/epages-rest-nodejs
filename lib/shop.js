// Constructor
var Shop = function(host, shop, authtoken) {
	this.host = host;
	this.shop = shop;
	this.authtoken = authtoken;
};


// debug mode, can be overwritten
Shop.prototype.debug = false;

// debugger method
Shop.prototype.log = function() {
	if(this.debug) {
		var arr = [];
		arr.push((new Date()).toLocaleString());
		for(var i = 0; i < arguments.length; i++ ) {
			arr.push(arguments[i]);
		}
		console.info(arr.join("; "));
	}
};

// add submodules
require('./http')(Shop);
require('./misc')(Shop);

// export shop module
module.exports = Shop;
