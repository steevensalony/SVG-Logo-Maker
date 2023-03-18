const triangles = require('../library/triangle.js');

// Testing for triangle shape color
describe('Triangle', () => {
  describe('render', () => {
    it('should return the shape color for the triangle shape that the user provides', () => {
      const shape = new triangles;
      shape.setShapeColor('blue');
      expect(shape.renderShape()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
  })
})