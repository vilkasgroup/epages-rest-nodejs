var ContentObject = function() {
	this.name = null;
	this.title = null;
	this.navigationCaption = null;
	this.shortDescription = null;
	this.description = null;		
};

ContentObject.prototype.getName = function() { return this.name; };
ContentObject.prototype.getTitle = function() { return this.title; };
ContentObject.prototype.getNavigationCaption = function() { return this.navigationCaption; };
ContentObject.prototype.getShortDescription = function() { return this.shortDescription; };
ContentObject.prototype.getDescription = function() { return this.description; };

ContentObject.prototype.setName = function(name) { this.name = name; };
ContentObject.prototype.setTitle = function(title) { this.title = title; };
ContentObject.prototype.setNavigationCaption = function(navigationCaption) { this.navigationCaption = navigationCaption; };
ContentObject.prototype.setShortDescription = function(shortDescription) { this.shortDescription = shortDescription; };
ContentObject.prototype.setDescription = function(description) { this.description = description; };

ContentObject.prototype.fromJSON = function(json) {
	this.setName(json.name);
	this.setTitle(json.title);
	this.setNavigationCaption(json.navigationCaption);
	this.setShortDescription(json.shortDescription);
	this.setDescription(json.description);
};

ContentObject.prototype.toJSON = function() {
	var json = {};
	json.name = this.getName();
	json.title = this.getTitle();
	json.navigationCaption = this.getNavigationCaption();
	json.shortDescription = this.getShortDescription();
	json.description = this.getDescription();
	return json;
};

module.exports = ContentObject;
