const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

//Questions to fill the README document

const questionPrompts = () =>
     inquirer.prompt([
        {
            type: "input",
            name: "Title",
            question: "What is the project title?"
        },
        {
            type: "input",
            name: "Description",
            question: "Describe your project"
        },
        {
            type: "input",
            name: "Installation",
            question: "How do you Install your project?"
        },
        {
            type: "input",
            name: "Use",
            question: "Briefly describe how to use this project."
        },
        {
            type: "input",
            name: "contribute",
            question: "explain how others could contribute to this project"
        },
        {
            type: "input",
            name: "test",
            question: "if there is a test included explain how to run it."
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
    ])


// function to write README file
questionPrompts()
.then((response) => {
fs.appendFile('README.md', generateMarkdown(response) ,(err) =>
console.log('Success!')

)});
// function to initialize program
// function init() {
//     const respo = questionPrompts();
//     const generate = generateMarkdown(respo)
//     fs.appendFile('README.md', (generate), (err) => console.log("Success!"))



// function call to initialize program



