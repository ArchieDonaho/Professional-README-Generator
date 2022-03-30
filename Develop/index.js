// TODO: Include packages needed for this application
//import the node file system
const { captureRejectionSymbol } = require('events');
const fs = require('fs');
//import inquirer
const inquirer = require('inquirer');
//import the markdown 
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: input => {
            if(input){
                return true;
            } else {
                console.log("(Please enter a valid input)")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your application:',
        validate: input => {
            if(input){
                return true;
            } else {
                console.log("(Please enter a valid input)")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install the application?',
        validate: input => {
            if(input){
                return true;
            } else {
                console.log("(Please enter a valid input)")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how the application is used:',
        validate: input => {
            if(input){
                return true;
            } else {
                console.log("(Please enter a valid input)")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can the application be tested?',
        validate: input => {
            if(input){
                return true;
            } else {
                console.log("(Please enter a valid input)")
                return false;
            }
        }
    }
    ,
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your application:',
        choices: [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
        validate: input => {
            if(input){
                return true;
            } else {
                console.log("(Please enter a valid input)")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email adress:',
        validate: input => {
            if(input){
                return true;
            } else {
                console.log("(Please enter a valid input)")
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        console.log("data written to file")
    } )
}

// TODO: Create a function to initialize app
function init() {
    //ask the questions
    inquirer.prompt(questions)
        //then generate the markdown
        .then(generateMarkdown)
        // then write the file using the data
        .then(markDown => {
            writeToFile('../dist/README.md', markDown);
        })
        .catch(error => {
            console.log(error);
        })
    
}

// Function call to initialize app
init();
