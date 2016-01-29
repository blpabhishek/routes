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
		assert.deepEqual(lib.getAllBuses('YESHWANTHPUR BUS STAND','YESHWANTHPUR BUS STAND'),["1","23","42","47","52","64","82","137","173","175","180","202","203","205","250","251","254","255","257","259","265","266","275","401","1A","52E","75F","79A","82A","82C","83C","90E","91C","98A","98E","205A","223H","225E","235J","250A","250B","250D","250E","250F","251A","251B","251C","251D","251M","252A","252B","252D","252E","252G","252K","252L","252N","253A","253C","253E","253J","253K","254A","254C","254D","255A","255B","255C","255D","255E","255F","255G","256A","256B","256C","256D","257A","257D","258A","258C","258E","258F","258G","258H","258K","258L","258M","258N","258Q","263A","263B","263C","263D","263E","263F","265A","286C","348E","364D","369K","401B","401D","401F","401G","401H","401J","401K","401L","401M","401R","500B","500F","500J"]);
	});
});
