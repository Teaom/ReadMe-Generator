const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = () => {

    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your application?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Description of application.',
         },
        {
          type: 'input',
          name: 'installation',
          message: 'How does one install this readme generator?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'How do you use this application?',
        },
        {
          type: 'input',
          name: 'test',
          message: 'How do you test this readme generator?',
        },
        {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a License if needed.',
        choices: ['Cocoapods', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Crates.io'],
        },
        {
        type: 'input',
        name: 'github',
        message: 'If you are a Contributer for this application, please provided your GitHub username.',
        },
        {
          type: 'input',
          name: 'email',
          message: 'For any questions reach out through email at.',
            },
      ])};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, error => {
      // if there is an error 
      if (error) {
        console.log(error);
        return;
        // when the README has been created 
      } else {
        console.log("¥¥YoUr ReAdMe HaS bEeN sUcCeSsFuLlY gEnErAtEd!¥¥")
      }
    })
  };
  
  //initializes program and processes user input and then writes the input to the README.md
  questions()
    
    .then(answers => {
      return generateMarkdown(answers);
    })
    .then(data => {
      return writeFile(data);
    })
    .catch(err => {
      console.log(err)
    });
