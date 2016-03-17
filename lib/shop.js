var Log = require('./log');
var Misc = require('./misc');
var Legal = require('./legal');
var HTTP = require('./http');

// Constructor
var Shop = function(apiurl, authtoken) {
	this.apiurl = apiurl;
	this.authtoken = authtoken;

	// add submodules
	this.log = new Log(this);
	this.misc = new Misc(this);
	this.http = new HTTP(this);
	this.legal = new Legal(this);
};


// debug mode, can be overwritten
Shop.prototype.debug = false;

// export shop module
module.exports = Shop;
