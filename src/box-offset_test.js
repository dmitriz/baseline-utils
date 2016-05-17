// box-offset_test.js

var box = require('./box-offset.js')

var fromEdge = box.fromEdge
var offset = box.offset

describe('Distance from the box Edge', function () {
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

describe('Total bottom offset', function () {
	it('should be 0 when line-height is 1 and base offset is 0', function () {
		expect(offset(1, 0)).toBe(0)
	})
	it('should equal half-leading when base offset is 0', function () {
		expect(offset(2, 0)).toBe(0.5)
	})
})
