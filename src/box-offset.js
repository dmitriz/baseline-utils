// box-offset.js

var math = require('better-math')

/**
 * @fromBase {finite} desired distance from base
 * @offset {finite} distance between base and the box edge
 * @return {finite} distance from the box egde
 */
module.exports = {
	fromEdge: function (fromBase, offset) {
		return math.add(fromBase, -offset)
	}
}
