var TermsAndConditions = function() {
	this.name = null;
	this.title = null;
	this.navigationCaption = null;
	this.shortDescription = null;
	this.description = null;		
};

TermsAndConditions.prototype.getName = function() { return this.name; };
TermsAndConditions.prototype.getTitle = function() { return this.title; };
TermsAndConditions.prototype.getNavigationCaption = function() { return this.navigationCaption; };
TermsAndConditions.prototype.getShortDescription = function() { return this.shortDescription; };
TermsAndConditions.prototype.getDescription = function() { return this.description; };

TermsAndConditions.prototype.setName = function(name) { this.name = name; };
TermsAndConditions.prototype.setTitle = function(name) { this.title = title; };
TermsAndConditions.prototype.setNavigationCaption = function(navigationCaption) { this.navigationCaption = navigationCaption; };
TermsAndConditions.prototype.setShortDescription = function(shortDescription) { this.shortDescription = shortDescription; };
TermsAndConditions.prototype.setDescription = function(description) { this.description = description; };

TermsAndConditions.prototype.fromJSON = function(json) {
	this.setName(json.name);
	this.setTitle(json.title);
	this.setNavigationCaption(json.navigationCaption);
	this.setShortDescription(json.shortDescription);
	this.setDescription(json.description);
};

TermsAndConditions.prototype.toJSON = function() {
	var json = {};
	json.name = this.getName();
	json.title = this.getTitle();
	json.navigationCaption = this.getNavigationCaption();
	json.shortDescription = this.getShortDescription();
	json.description = this.getDescription();
	return json;
};

module.exports = TermsAndConditions;
