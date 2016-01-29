var lib = require('../lib/indirectRoutes');
var chai = require('chai');
var assert = chai.assert;
console.log(lib)
describe("Alternate routes", function() {
	it("should get Via Stands ", function() {
		assert.deepEqual(["YESHWANTHPUR BUS STAND", "K R MARKET", "KBS", "KEMPEGOWDA BUS STAND", "SIRSI CIRCLE", "MADIWALA", "Jn. HOSUR RD", "BANGALORE DAIRY"],lib.getAlternateRoutes('CHAMRAJPET','MARIYAPPANAPALYA'));
	});
	it("should get Via Stands also when direct routes are available", function() {
		var via = lib.getAlternateRoutes('KENGERI SAT TOWN','MARIYAPPANAPALYA');
		assert.deepEqual(via.length,5);
	});
});