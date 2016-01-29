var lib = require('../lib/directRoute');
var chai = require('chai');
var assert = chai.assert;

describe("First Direct routes", function() {
	it("should get a direct Bus ", function() {
		assert.equal(405,lib.getFirstBus('KENGERI SAT TOWN','MARIYAPPANAPALYA'));
	});
	it("should return Infinity if there is no direct bus ", function() {
		assert.equal(Infinity,lib.getFirstBus('CHAMRAJPET','MARIYAPPANAPALYA'));
	});
});

describe("All Direct routes", function() {
	it("should get all direct Bus ", function() {
		assert.deepEqual(["405","401K","401M","501A","502A"],lib.getAllBuses('KENGERI SAT TOWN','MARIYAPPANAPALYA'));
	});
	it("should return EmptyArray if there is no direct bus ", function() {
		assert.deepEqual([],lib.getAllBuses('CHAMRAJPET','MARIYAPPANAPALYA'));
	});
	it("should get all Buses which source and destination are same  ", function() {
		var allStands = lib.getAllBuses('YESHWANTHPUR BUS STAND','YESHWANTHPUR BUS STAND');
		assert.equal(allStands.length,113);
	});
});
