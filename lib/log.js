var Log = function(shop) {
	return function() {
		if(shop.debug) {
			var arr = [];
			arr.push((new Date()).toLocaleString());
			for(var i = 0; i < arguments.length; i++ ) {
				var argument = arguments[i];
				var push = function(param) {
					arr.push(param);
				};
				if(typeof(argument) == "object") {
					push(JSON.stringify(argument));
				} else {
					push(argument);
				}
			}
			console.info(arr.join("; "));
		}
	};
};

module.exports = Log;