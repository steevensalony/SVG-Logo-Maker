class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">`
  }
}

module.exports = Shape;