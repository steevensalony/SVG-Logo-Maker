const Shapes =  require('../library/shape.js');

class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }

setShapeColor(color) {
  this.shapeColor = color;
}

  renderShape () {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
  }

  renderText () {
    return `<text x="100" y="75" font-weight="bold" fill="${this.textColor}">${this.text}</text>\n</svg>`
  }
}

module.exports = Triangle;