var RightsOfWithdrawal = function() {
	this.name = null;
	this.title = null;
	this.navigationCaption = null;
	this.shortDescription = null;
	this.description = null;		
};

RightsOfWithdrawal.prototype.getName = function() { return this.name; };
RightsOfWithdrawal.prototype.getTitle = function() { return this.title; };
RightsOfWithdrawal.prototype.getNavigationCaption = function() { return this.navigationCaption; };
RightsOfWithdrawal.prototype.getShortDescription = function() { return this.shortDescription; };
RightsOfWithdrawal.prototype.getDescription = function() { return this.description; };

RightsOfWithdrawal.prototype.setName = function(name) { this.name = name; };
RightsOfWithdrawal.prototype.setTitle = function(name) { this.title = title; };
RightsOfWithdrawal.prototype.setNavigationCaption = function(navigationCaption) { this.navigationCaption = navigationCaption; };
RightsOfWithdrawal.prototype.setShortDescription = function(shortDescription) { this.shortDescription = shortDescription; };
RightsOfWithdrawal.prototype.setDescription = function(description) { this.description = description; };

RightsOfWithdrawal.prototype.fromJSON = function(json) {
	this.setName(json.name);
	this.setTitle(json.title);
	this.setNavigationCaption(json.navigationCaption);
	this.setShortDescription(json.shortDescription);
	this.setDescription(json.description);
};

RightsOfWithdrawal.prototype.toJSON = function() {
	var json = {};
	json.name = this.getName();
	json.title = this.getTitle();
	json.navigationCaption = this.getNavigationCaption();
	json.shortDescription = this.getShortDescription();
	json.description = this.getDescription();
	return json;
};

module.exports = RightsOfWithdrawal;
