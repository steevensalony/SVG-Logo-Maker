const circles = require('../library/circle.js');

// Testing for circle shape color
describe('Circle', () => {
  describe('render', () => {
    it('should return the shape color for the circle shape that the user provides', () => {
      const shape = new circles;
      shape.setShapeColor('blue');
      expect(shape.renderShape()).toEqual('<circle cx="100" cy="100" r="85" stroke="black" stroke-width="3" fill="blue" />');
    });
  });
});