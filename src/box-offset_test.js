// box-offset_test.js

var fromEdge = require('./box-offset.js').fromEdge

describe('Compute distance from the box Edge', function () {
	it('should be 0 when desired distance and offset are 0', function () {
		expect(fromEdge(0, 0)).toBe(0)
	})
	it('should be the same as desired distance if offset is 0', function () {
		expect(fromEdge(1.2, 0)).toBe(1.2)
		expect(fromEdge(121, 0)).toBe(121)
	})
	it('should be the negative offset if desired distance is 0', function () {
		expect(fromEdge(0, 0.33)).toBe(-0.33)		
		expect(fromEdge(0, 33)).toBe(-33)		
	})
	it('should reduce the desired distance by the offset', function () {
		expect(fromEdge(1.12, 1.12)).toBe(0)
		expect(fromEdge(4.12, 1.13)).toBe(2.99)
	})
})
