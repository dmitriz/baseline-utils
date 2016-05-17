// box-offset_test.js

var fromEdge = require('./box-offset.js')

describe('Offset', function () {
	it('should compute distance from the box Edge', function () {
		expect(fromEdge(0, 0)).toBe(0)
	})
})
