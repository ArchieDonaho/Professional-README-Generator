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
                console.log("(This section cannot be blank)")
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
                console.log("(This section cannot be blank)")
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
                console.log("(This section cannot be blank)")
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
                console.log("(This section cannot be blank)")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution information:',
        validate: input => {
            if(input){
                return true;
            } else {
                console.log("(This section cannot be blank)")
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
                console.log("(This section cannot be blank)")
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Will your project have a license?',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your application:',
        choices: [
            'MIT',
            'GPL',
            'BSD',
        ],
        //they will only be asked about the license if they selected "yes" prior
        when: ({confirmLicense}) => {
            if(confirmLicense){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your full GitHub username:',
        validate: input => {
            if(input){
                return true;
            } else {
                console.log("(This section cannot be blank)")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your full email adress:',
        validate: input => {
            if(input){
                return true;
            } else {
                console.log("(This section cannot be blank)")
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
        .then(markDownContent => {
            writeToFile('../dist/README.md', markDownContent);
        })
        //and display errors if they exist
        .catch(error => {
            console.log(error);
        })
}

// Function call to initialize app
init();
