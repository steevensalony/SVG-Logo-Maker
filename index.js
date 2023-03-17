const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./library/shape');
const generateSVG = require('./utility/generateSVG');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter no more than 3 characters for the logo',
    validate: text => {
      if (text.length > 3 || (!text)) {
        console.log('Cannot be more than 3 characters long or empty!')
        return false;
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter the color you would like your text to be',
    validate: textColor => {
      if (textColor) {
        return true;
      } else {
        console.log('Please enter a color')
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape from the list',
    choices: ['Circle', 'Square', 'Triangle'],
    validate: shape => {
      if (shape) {
        return true;
      } else {
        console.log('Please choose a shape!')
        return false;
      }
    }
  },
  {
    type: 'inpur',
    name: 'shapeColor',
    message: 'Please choose a color for your chosen shape',
    validate: shapeColor => {
      if (shapeColor) {
        return true;
      } else {
        console.log('please enter a color for your chosen shape!')
        return false;
      }
    }
  }
]

// Function to write SVG file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error)
        throw error;
      console.log('Awsome! Your SVG file has been generated!')
  });
}
// Function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
    writeToFile("./examples/logo.svg", generateSVG(userInput))
  });
}

// Function call to initialize app
init();