// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your application?',
        },
        {
          type: 'input',
          message: 'Provide a description of your application.',
          name: 'description',
        },
        {
          type: 'input',
          message: 'How does one install this readme generator?',
          name: 'installation',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'How does one use this application?',
        },
        {
          type: 'input',
          name: 'test',
          message: 'How does one test this readme generator?',
        },
        {
        type: 'checkbox',
        message: 'Choose your License!',
        name: 'license',
        choices: ['Cocoapods', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Crates.io'],
        },
        {
        type: 'input',
        message: 'If you are a Contributer for this application, please provided your GitHub username.',
        name: 'github',
        },
        {
          type: 'input',
          message: 'If you have any questions email me at.',
            name: 'email',
            },
      ])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
