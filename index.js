const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")


//Questions to fill the README document

const questionPrompts = () =>
     inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the project title?"
        },
        {
            type: "input",
            name: "Description",
            message: "Describe your project"
        },
        {
            type: "input",
            name: "Installation",
            message: "How do you Install your project?"
        },
        {
            type: "input",
            name: "Use",
            message: "Briefly describe how to use this project."
        },
        {
            type: "input",
            name: "contribute",
            message: "explain how others could contribute to this project"
        },
        {
            type: "input",
            name: "test",
            message: "if there is a test included explain how to run it."
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "githubuser",
            message: "What is your github UserName?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },

    ])


// function to write README file
questionPrompts()
.then((response) => {
fs.appendFile('README.md', generateMarkdown(response) ,(err) =>
console.log('Success!')

)});



