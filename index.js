const fs= require('fs');
const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application
console.log("Trial");

// TODO: Create an array of questions for user input
const questions= () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of the project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter Title of the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please write a brief description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install your project? Describe step-by-step on how to intall and run the program',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                }
                else {
                    console.log('Please describe on how to install and run the program!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log('Please provide instructions and examples on how to use the program!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use for this project?',
            choices: ['Mozilla Public License','Apache License 2.0','MIT License','GNU AGPLv3','Boost Software License 1.0','The Unlicense']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributers of this project?'
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Is there a test included?',
            default: true
        },
        {
            type: 'input',
            name:'test',
            message: 'Please explain',
            when: ({confirmTest}) => confirmTest
        },
        {
            type: 'confirm',
            name: 'confirmQuestion',
            message: 'Do you have any questions?',
            default: true
        },
        {
            type: 'input',
            name: 'question',
            message: 'Please type your question?',
            when: ({confirmQuestion}) => confirmQuestion

        },
        {
           type: 'input',
           name: 'github',
           message: 'Please enter your Github username',
           validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your E-mail',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your E-mail address!');
                    return false;
                }
            }
        }
    ])
    .then((questionsData) => {
        console.log('README file generated');
        let promptData = generateMarkdown(questionsData);
        console.log(generateMarkdown(questionsData))
        console.log(generateMarkdown(questionsData));
        writeFile(promptData)
    })
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeFile(data){
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log('Error');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log('hello')
    const data=  questions();
    // console.log(data, 'data');
    // const generateReadme= generateMarkdown(data);
    // console.log(generateReadme);

    // fs.writeFile('./dist/README.md', generateReadme, err => {
    //     if (err) {
    //         console.log('Error');
    //     }
    // });
}

// Function call to initialize app
init();

