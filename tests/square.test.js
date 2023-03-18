const squares = require('../library/square.js');

// Testing for square shape color
describe('Square', () => {
  describe('render', () => {
    it('should return the shape color for the square shape that the user provides', () => {
      const shape = new squares;
      shape.setShapeColor('blue');
      expect(shape.renderShape()).toEqual('<rect width="200" height="200" stroke="black" fill="blue" stroke-width="5"/>');
    })
  })
})