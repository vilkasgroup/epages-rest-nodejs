var ContactInformation = function() {
	this.name = null;
	this.title = null;
	this.navigationCaption = null;
	this.shortDescription = null;
	this.description = null;		
};

ContactInformation.prototype.getName = function() { return this.name; };
ContactInformation.prototype.getTitle = function() { return this.title; };
ContactInformation.prototype.getNavigationCaption = function() { return this.navigationCaption; };
ContactInformation.prototype.getShortDescription = function() { return this.shortDescription; };
ContactInformation.prototype.getDescription = function() { return this.description; };

ContactInformation.prototype.setName = function(name) { this.name = name; };
ContactInformation.prototype.setTitle = function(name) { this.title = title; };
ContactInformation.prototype.setNavigationCaption = function(navigationCaption) { this.navigationCaption = navigationCaption; };
ContactInformation.prototype.setShortDescription = function(shortDescription) { this.shortDescription = shortDescription; };
ContactInformation.prototype.setDescription = function(description) { this.description = description; };

ContactInformation.prototype.fromJSON = function(json) {
	this.setName(json.name);
	this.setTitle(json.title);
	this.setNavigationCaption(json.navigationCaption);
	this.setShortDescription(json.shortDescription);
	this.setDescription(json.description);
};

ContactInformation.prototype.toJSON = function() {
	var json = {};
	json.name = this.getName();
	json.title = this.getTitle();
	json.navigationCaption = this.getNavigationCaption();
	json.shortDescription = this.getShortDescription();
	json.description = this.getDescription();
	return json;
};

module.exports = ContactInformation;
