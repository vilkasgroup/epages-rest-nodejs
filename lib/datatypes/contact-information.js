var ContentObject = require('./content-object');
var util = require("util");

var ContactInformation = function() {
	ContactInformation.super_.call(this);

	this.company = null;
	this.contactPerson = null;
	this.contactPersonJobTitle = null;
	this.address = null;
	this.phone = null;
	this.email = null;	
};

// must be between constructor and new methods
util.inherits(ContactInformation, ContentObject);

ContactInformation.prototype.getCompany = function() { return this.company; };
ContactInformation.prototype.getContactPerson = function() { return this.contactPerson; };
ContactInformation.prototype.getContactPersonJobTitle = function() { return this.contactPersonJobTitle; };
ContactInformation.prototype.getAddress = function() { return this.address; };
ContactInformation.prototype.getPhone = function() { return this.phone; };
ContactInformation.prototype.getEmail = function() { return this.email; };

ContactInformation.prototype.setCompany = function(company) { this.company = company; };
ContactInformation.prototype.setContactPerson = function(contactPerson) { this.contactPerson = contactPerson; };
ContactInformation.prototype.setContactPersonJobTitle = function(contactPersonJobTitle) { this.contactPersonJobTitle = contactPersonJobTitle; };
ContactInformation.prototype.setAddress = function(address) { this.address = address; };
ContactInformation.prototype.setPhone = function(phone) { this.phone = phone; };
ContactInformation.prototype.setEmail = function(email) { this.email = email; };

ContactInformation.prototype.fromJSON = function(json) {
	ContactInformation.super_.prototype.fromJSON.call(this, json);
	this.setCompany(json.company);
	this.setContactPerson(json.contactPerson);
	this.setContactPersonJobTitle(json.contactPersonJobTitle);
	this.setAddress(json.address);
	this.setPhone(json.phone);
	this.setEmail(json.email);
};

ContactInformation.prototype.toJSON = function() {
	var json = ContactInformation.super_.prototype.toJSON.call(this);
	json.company = this.getCompany();
	json.contactPerson = this.getContactPerson();
	json.contactPersonJobTitle = this.getContactPersonJobTitle();
	json.address = this.getAddress();
	json.phone = this.getPhone();
	json.email = this.getEmail();
	return json;
};

module.exports = ContactInformation;

