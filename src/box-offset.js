// box-offset.js
'use strict'

var math = require('better-math')

// All distances are in ems unless specified otherwise
module.exports = {

  /**
   * Distance (of any point) from a box Edge (Top or Bottom),
   *   calculated from the distance from Baseline and distance from Baseline to the Edge
   *
   * @fromBaseline {finite} desired distance from baseline
   * @baseline2Edge {finite} distance from Baseline to the box edge
   *
   * @return {finite} distance from the box egde
   */
  fromEdge: function (fromBaseline, baseline2Edge) {
    return math.add(fromBaseline, -baseline2Edge)
  },
  baseline2LeadingEdge: baseline2LeadingEdge,

  fromEdgeTop: function (fromBaseline, baseline2EdgeBottom) {
    var baseline2EdgeTop = 1 - baseline2EdgeBottom
    return fromEdgeBottom (lineHeight, baseline2EdgeTop)
  },
  fromEdgeBottom: fromEdgeBottom
}

/**
 * Distance from Baseline to Edge (Top or Bottom) of the Line box,
 *   calculated from the line-height and distance from Baseline to the Font box Edge
 *
 * @lineHeight {finite} CSS line-height
 * @baseline2FontEdge {finite} distance from Baseline to the edge of the Font box
 */
function baseline2LeadingEdge (lineHeight, baseline2FontEdge) {
  var leading = math.add(lineHeight, -1)
  var halfLeading = math.div(leading, 2)
  return math.add(halfLeading, baseline2FontEdge)
}


function fromEdgeBottom (lineHeight, baseline2EdgeBottom) {
  var leading = math.add(lineHeight, -1)
  var halfLeading = math.div(leading, 2)
  return math.add(halfLeading, baseline2EdgeBottom)
}
