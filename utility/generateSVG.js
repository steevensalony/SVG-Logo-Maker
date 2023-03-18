const shapes = require('../library/shape.js')
const circles = require('../library/circle.js')
const triangles = require('../library/triangle.js')
const squares = require('../library/square.js')

function generateSVG(data) {
  let newShapes = '';
  const newShape = new shapes;
  newShapes = newShape.render();

  if (data.shape === 'Circle') {
    const newCircle =  new circles(data.text, data.textColor, data.shapeColor);
    newShapes += `\n${newCircle.renderShape()}\n${newCircle.renderText()}`
  } else if (data.shape === 'Triangle') {
    const newTriangle = new triangles(data.text, data.textColor, data.shapeColor);
    newShapes += `\n${newTriangle.renderShape()}\n${newTriangle.renderText()}`
  } else if (data.shape === 'Square') {
    const newSquare = new squares(data.text, data.textColor, data.shapeColor);
    newShapes += `\n${newSquare.renderShape()}\n${newSquare.renderText()}`
  }
  return newShapes;
}

module.exports = generateSVG;