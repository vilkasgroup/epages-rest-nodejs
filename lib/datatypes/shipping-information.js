var ShippingInformation = function() {
	this.name = null;
	this.title = null;
	this.navigationCaption = null;
	this.shortDescription = null;
	this.description = null;		
};

ShippingInformation.prototype.getName = function() { return this.name; };
ShippingInformation.prototype.getTitle = function() { return this.title; };
ShippingInformation.prototype.getNavigationCaption = function() { return this.navigationCaption; };
ShippingInformation.prototype.getShortDescription = function() { return this.shortDescription; };
ShippingInformation.prototype.getDescription = function() { return this.description; };

ShippingInformation.prototype.setName = function(name) { this.name = name; };
ShippingInformation.prototype.setTitle = function(name) { this.title = title; };
ShippingInformation.prototype.setNavigationCaption = function(navigationCaption) { this.navigationCaption = navigationCaption; };
ShippingInformation.prototype.setShortDescription = function(shortDescription) { this.shortDescription = shortDescription; };
ShippingInformation.prototype.setDescription = function(description) { this.description = description; };

ShippingInformation.prototype.fromJSON = function(json) {
	this.setName(json.name);
	this.setTitle(json.title);
	this.setNavigationCaption(json.navigationCaption);
	this.setShortDescription(json.shortDescription);
	this.setDescription(json.description);
};

ShippingInformation.prototype.toJSON = function() {
	var json = {};
	json.name = this.getName();
	json.title = this.getTitle();
	json.navigationCaption = this.getNavigationCaption();
	json.shortDescription = this.getShortDescription();
	json.description = this.getDescription();
	return json;
};

module.exports = ShippingInformation;
