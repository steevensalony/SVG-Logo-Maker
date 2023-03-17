const Shapes =  require('../lib/shape.js');

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }

setShapeColor(color) {
  this.shapeColor = color;
}

  renderShape () {
    return `<rect width="200" height="200" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>`
  }

  renderText () {
    return `<text x="100" y="100" font-size="55" text-anchor="middle" font-weight="bold" fill="${this.textColor}">${this.text}</text>\n</svg>`
  }
}

module.exports = Square;