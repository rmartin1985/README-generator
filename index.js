const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a title for your project!");
                    return false;
                }
            }           
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description of your project",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter a description of your project!");
                }
            }
        },
        {
            type: "input",
            name: "install",
            message: "Describe the install instructions for your project (separate each instruction with a comma)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the instalation instructions for your project!");
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Enter usage information for your project (include a screenshot/gif here)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter usage instructions for your project!");
                }
            }
        },
        {
            type: "confirm",
            name: "confirmContribute",
            message: "Would you like to add instructions for how others can contribute to your project?",
            default: true
        },
        {
            type: "input",
            name: "contributions",
            message: "Add guidliness for others to contribute to your project here",
            when: ({ confirmContribute }) => confirmContribute
        },
        {
            type: "confirm",
            name: "confirmTesting",
            message: "Woould you like to add any tests for your application?",
            default: false
        },
        {
            type: "input",
            name: "tests",
            message: "Enter any testing information here",
            when: ({ confirmTesting }) => confirmTesting
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: "list",
            message: "Please select a license for this project",
            name: "license",
            choices: [
                "MIT License",
                "ISC License",
                "GNU GPLv3",
                "Mozilla Public License 2.0",
                "Apache License 2.0",
                "None"
            ]
        }
    ])
    .then(data => {
        writeToFile("README.md", generateMarkdown(data));
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    questions();
 }

// Function call to initialize app
init();