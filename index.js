// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What are the usage instructions for your project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// Initialise the app 
function init() {
    console.log('Welcome to the README.md generator. The quick and easy way to write less markdown and more code!');
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);

        const markdown = generateMarkdown(answers);

        // Create a directory called output and write the README.md file to it - it was overwriting my README.md file in the challenge directory
        const outputDir = path.join(__dirname, 'output');
        const outputPath = path.join(outputDir, 'README.md');
        // Check if the directory exists, if not create it
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }
        fs.writeFile(outputPath, markdown, 'utf-8', (err) => {
            if (err) throw err;
            console.log(`Nice one! Your README.md is created in the directory ${outputDir}!`);
        });
    });
}

// Start this puppy up!
init();
