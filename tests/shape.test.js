const shapes = require('../library/shape.js')

describe('Shape', () => {
  describe('render', () => {
    it('should return the SVG tag', () => {
      const shape = new shapes;
      shape.setSVG = '<svg width="300" height="350" version="1.1" xmlns="http://www.w3.org/2000/svg">';
      expect(shape.render()).toEqual('<svg width="300" height="350" version="1.1" xmlns="http://www.w3.org/2000/svg">');
    })
  })
})