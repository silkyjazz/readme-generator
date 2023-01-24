const { default: inquirer } = require("inquirer");

//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your name?",
    answer: "name",
  },
  {
    type: "input",
    message: "What is the title of your Project?",
    answer: "title",
  },
  {
    type: "options",
    message: "Choose a License",
    choices: ["Apache", "General Public License", "MIT"],
  },
  {
    type: "input",
    message: "Table of Contents",
    answer: "contents",
  },
  {
    type: "input",
    message: "Usage",
    answer: "usage",
  },
  {
    type: "input",
    message: "Write a description of your project",
    answer: "description",
  },
  {
    type: "input",
    message: "List any contributors",
    answer: "contributors",
  },
  {
    type: "input",
    message: "Tests",
    answer: "test",
  },
  {
    type: "input",
    message: "Questions",
    answer: "questions",
  },
  { message: "What is your GitHub username?", answer: "username" },
  { message: "Enter your email address", answer: "email" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var file = generateMarkdown(data);
  fs.writeFile(fileName, content, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("success");
  });
  //take their responses and generate read me
}

//Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    var fileName = "README.md";

    writeToFile(fileName, data);
  });
}

// Function call to initialize app
init();
