class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg width="300" height="350" version="1.1" xmlns="http://www.w3.org/2000/svg">`
  }
}

module.exports = Shape;