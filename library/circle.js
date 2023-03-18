const Shapes = require('../library/shape');

// creating circle class with same attributes as shape class
class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }

  // function to test shape color
  setShapeColor(color) {
    this.shapeColor = color;
}

  renderShape () {
    return `<circle cx="100" cy="100" r="85" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`
  }

  renderText () {
    return `<text x="100" y="125" font-size="55" text-anchor="middle" font-weight="bold" fill="${this.textColor}">${this.text}</text>\n</svg>`
  }
}

module.exports = Circle;