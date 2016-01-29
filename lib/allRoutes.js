var allRoutes = function() {
    var data = require('fs').readFileSync('data/allRoutes.json', 'utf8');
    return JSON.parse(data);
}();

module.exports = allRoutes; 
