var lib = require('./directRoute');
var hubs = require('./hubs');

exports.getAlternateRoutes = function(source, destination){
	var locations = {};
	var secondrylocation = {};
	var viaStations = [];
	for (var i = 0; i < hubs.length; i++){
		locations[hubs[i]] = lib.getAllBuses(source,hubs[i]);
		secondrylocation[hubs[i]] =lib.getAllBuses(hubs[i],destination);
	};
	for (var i in locations) {
		if(locations[i].length && secondrylocation[i].length)
			viaStations.push(i);
	};
	return viaStations;
};