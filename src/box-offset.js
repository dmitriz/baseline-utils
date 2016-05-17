// box-offset.js

var math = require('better-math')

module.exports = {
	/**
	 * @fromBase {finite} desired distance from base
	 * @offset {finite} distance between base and the box edge
	 *
	 * @return {finite} distance from the box egde
	 */
	fromEdge: function (fromBase, offset) {
		return math.add(fromBase, -offset)
	},
	offset: function (lineHeight, baseOffset) {
		var leading = math.add(lineHeight, -1)
		var halfLeading = leading / 2
		return math.add(halfLeading, baseOffset)
	}
}
