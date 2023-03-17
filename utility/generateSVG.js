const shapes = require('../library/shape.j')
const circles = require('../library/circle.js')
const triangles = require('../library/triangle.js')
const squares = require('../library/square.js')

function generateSVG(data) {
  let newStr = '';
  const newShape = new shapes;
  newStr = newShape.render();

  if (data.shape === 'Circle') {
    const newCircle =  new circles(data.text, data.textColor, data.shapeColor);
    newStr += `\n    ${newCircle.renderShape()}\n    ${newCircle.renderText()}`
  } else if (data.shape === 'Triangle') {
    const newTriangle = new triangles(data.text, data.textColor, data.shapeColor);
    newStr += `\n    ${newTriangle.renderShape()}\n    ${newTriangle.renderText()}`
  } else if (data.shape === 'Square') {
    const newSquare = new squares(data.text, data.textColor, data.shapeColor);
    newStr += `\n    ${newSquare.renderShape()}\n    ${newSquare.renderText()}`
  }
  return newStr;
}

module.exports = generateSVG;