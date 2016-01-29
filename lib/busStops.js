var allBusStops = function() {
    var data = require('fs').readFileSync('data/allBusStops.json', 'utf8');
    return JSON.parse(data);
}();

module.exports = allBusStops; 