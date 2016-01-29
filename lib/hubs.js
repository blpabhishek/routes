var busStops = require('./busStops');

var allHubs = function (argument) {
	var bigStops=[];
	for(var stop in busStops){
		if(busStops[stop].length>100)
			bigStops.push(stop);
	}
	return bigStops;
}();

module.exports = allHubs;