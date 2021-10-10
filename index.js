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
            message: "Describe the install instructions for your project",
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
            type: "input",
            name: "contributions",
            message: "Add contributors credits here:",
        },
        {
            type: "input",
            name: "tests",
            message: "Enter any testing information here:",
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
                "MIT",
                "ISC",
                "GPL-3.0",
                "MPL-2.0",
                "Apache-2.0",
                "None"
            ]
        }
    ])
    .then(data => {
        console.log("Creating README file. Hang tight.");
        writeToFile("README.md", generateMarkdown(data));
        console.log("README file has been created!")
    })
    .catch ((err) => {
        console.log(err);
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    questions();
 }

// Function call to initialize app
init();