var PrivacyPolicy = function() {
	this.name = null;
	this.title = null;
	this.navigationCaption = null;
	this.shortDescription = null;
	this.description = null;	
	this.company = null;
	this.contactPerson = null;
	this.contactPersonJobTitle = null;
	this.address = null;
	this.phone = null;
	this.email = null;	
};

PrivacyPolicy.prototype.getName = function() { return this.name; };
PrivacyPolicy.prototype.getTitle = function() { return this.title; };
PrivacyPolicy.prototype.getNavigationCaption = function() { return this.navigationCaption; };
PrivacyPolicy.prototype.getShortDescription = function() { return this.shortDescription; };
PrivacyPolicy.prototype.getDescription = function() { return this.description; };
PrivacyPolicy.prototype.getCompany = function() { return this.company; };
PrivacyPolicy.prototype.getContactPerson = function() { return this.contactPerson; };
PrivacyPolicy.prototype.getContactPersonJobTitle = function() { return this.contactPersonJobTitle; };
PrivacyPolicy.prototype.getAddress = function() { return this.address; };
PrivacyPolicy.prototype.getPhone = function() { return this.phone; };
PrivacyPolicy.prototype.getEmail = function() { return this.email; };

PrivacyPolicy.prototype.setName = function(name) { this.name = name; };
PrivacyPolicy.prototype.setTitle = function(title) { this.title = title; };
PrivacyPolicy.prototype.setNavigationCaption = function(navigationCaption) { this.navigationCaption = navigationCaption; };
PrivacyPolicy.prototype.setShortDescription = function(shortDescription) { this.shortDescription = shortDescription; };
PrivacyPolicy.prototype.setDescription = function(description) { this.description = description; };
PrivacyPolicy.prototype.setCompany = function(company) { this.company = company; };
PrivacyPolicy.prototype.setContactPerson = function(contactPerson) { this.contactPerson = contactPerson; };
PrivacyPolicy.prototype.setContactPersonJobTitle = function(contactPersonJobTitle) { this.contactPersonJobTitle = contactPersonJobTitle; };
PrivacyPolicy.prototype.setAddress = function(address) { this.address = address; };
PrivacyPolicy.prototype.setPhone = function(phone) { this.phone = phone; };
PrivacyPolicy.prototype.setEmail = function(email) { this.email = email; };

PrivacyPolicy.prototype.fromJSON = function(json) {
	this.setName(json.name);
	this.setTitle(json.title);
	this.setNavigationCaption(json.navigationCaption);
	this.setShortDescription(json.shortDescription);
	this.setDescription(json.description);
	this.setCompany(json.company);
	this.setContactPerson(json.contactPerson);
	this.setContactPersonJobTitle(json.contactPersonJobTitle);
	this.setAddress(json.address);
	this.setPhone(json.phone);
	this.setEmail(json.email);
};

PrivacyPolicy.prototype.toJSON = function() {
	var json = {};
	json.name = this.getName();
	json.title = this.getTitle();
	json.navigationCaption = this.getNavigationCaption();
	json.shortDescription = this.getShortDescription();
	json.description = this.getDescription();
	json.company = this.getCompany();
	json.contactPerson = this.getContactPerson();
	json.contactPersonJobTitle = this.getContactPersonJobTitle();
	json.address = this.getAddress();
	json.phone = this.getPhone();
	json.email = this.getEmail();
	return json;
};

module.exports = PrivacyPolicy;
