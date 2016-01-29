var allRoutes = function() {
    var data = require('fs').readFileSync('data/result.json', 'utf8');
    return JSON.parse(data);
}();

exports.getFirstBus = function(source, destination) {
    for (var busNo in allRoutes)
        if (allRoutes[busNo].indexOf(source) != -1 && allRoutes[busNo].indexOf(destination) != -1)
            return busNo;
    return Infinity;
};

exports.getAllBuses = function(source, destination) {
	var allBuses =[];
    for (var busNo in allRoutes)
        if (allRoutes[busNo].indexOf(source) != -1 && allRoutes[busNo].indexOf(destination) != -1)
            allBuses.push(busNo);
    return allBuses;
};
