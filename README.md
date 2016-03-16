# epages-rest-nodejs

## installation

```
npm install epages-rest-sdk --save
```

## usage

```
var Shop = require("epages-rest-sdk");
var shop = new Shop(apiurl, accesstoken);
shop.getCurrencies(function(err, data) {
	var defaultCurrency = data.default;
	var currencies = data.items;
});
```

