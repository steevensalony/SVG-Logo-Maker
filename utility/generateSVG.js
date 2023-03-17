const shapes = require('../lib/shape')
const circles = require('../lib/circle')
const triangles = require('../lib/triangle')
const squares = require('../lib/square')

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