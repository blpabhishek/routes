var fs = require('fs');
var allRoutes = JSON.parse(fs.readFileSync('data/allRoutes.json','utf-8'));

var allBusStands = function() {
    var allStands = [];
    for (var busNo in allRoutes) {
        allRoutes[busNo].forEach(function(stand) {
            if (allStands.indexOf(stand) == -1)
                allStands.push(stand);
        });
    }
    return allStands;
}();

var allBusStops = function() {
    var busStops = {};
    allBusStands.forEach(function(stand) {
        for (var busNo in allRoutes) {
            if (allRoutes[busNo].indexOf(stand) != -1) {
                busStops[stand] = busStops[stand] || [];
                busStops[stand].push(busNo);
            }
        }
    });
    return busStops;
}();

fs.writeFileSync('data/allBusStops.json',JSON.stringify(allBusStops));
