var fs = require('fs');
var data = fs.readFileSync(process.argv.slice(2).join(''),'utf-8');
data = data.split('\r\n');
var jsonObject = {};
data.forEach(function (record) {
	var data = record.split(':');
	jsonObject[data[0]] = data[1].split(',');
});

fs.writeFileSync('data/allRoutes.json',JSON.stringify(jsonObject));
