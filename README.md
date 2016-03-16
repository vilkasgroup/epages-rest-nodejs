# epages-rest-nodejs

## installation

```
npm install epages-rest-sdk --save
```

## basic usage and authentication

```
var Shop = require("epages-rest-sdk");
var shop = new Shop(apiurl, accesstoken);
shop.getCurrencies(function(err, currencies) {
	console.info("You have " + currencies.length + " currencies on your shop.");
});
```

## asyncronous nature and error handling

```
shop.getLocales(function(err, locales) {
	if(err) {
		throw(err);
	}
	console.info("You have " + locales.length + " locales on your shop.");
});
```

## utility methods
TBD

## using collections

## datatypes

The datatypes follow definition of https://developer.epages.com/apps/data-types.html