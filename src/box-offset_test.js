// box-offset_test.js

var box = require('./box-offset.js')

var fromEdge = box.fromEdge
var baseline2LeadingEdge = box.baseline2LeadingEdge

var fromEdgeBottom = box.fromEdgeBottom
var fromEdgeTop = box.fromEdgeTop

describe('Distance from box Edge (Top or Bottom)', function () {
  it('should be 0 when desired distance and baseline to Edge are 0', function () {
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

describe('Baseline to leading box Edge (Top or Bottom)', function () {
  it('should be 0 when line-height is 1 (default) and baseline to Edge is 0', function () {
    expect(baseline2LeadingEdge(1, 0)).toBe(0)
  })
})

describe('Distance from Bottom Edge down', function () {
  it('should be 0 when line-height is 1 (default) and baseline to Bottom Edge is 0', function () {
    expect(fromEdgeBottom(1, 0)).toBe(0)
  })
  it('should equal (line-height - 1)/2 (half-leading) when baseline to Bottom Edge is 0', function () {
    expect(fromEdgeBottom(2, 0)).toBe(0.5)
    expect(fromEdgeBottom(5.8, 0)).toBe(2.4)
  })
  xit('should equal minus the distance to Bottom Edge when line-height is 1 (default)', function () {
    expect(fromEdgeBottom(1, 0.3)).toBe(-0.3)
  })
})

describe('Distance from EdgeTop up', function () {
  it('should be 1 when line-height is 1 and base offset is 0', function () {
    expect(fromEdgeBottom(1, 0)).toBe(0)
  })
  it('should equal half-leading when base offset is 0', function () {
    expect(fromEdgeBottom(2, 0)).toBe(0.5)
  })
})
