const { default: inquirer } = require("inquirer");

//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your First and Last name?",
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
      choices:["Apache License 2.0", "General Public License v3.0", "MIT License"]
    },
    {
      type: "input",
      message: "Table of Contents",
      answer: "confirm",
    },
    {
      type: "input",
      message: "Usage",
      answer: "usage",
    },
    {
      type: "input",
      message: "Write a description",
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
    {message: "Github User name",
    answer: "username"},  
    {message: "Enter your email address",
    answer: "email"}, 
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //take their responses and generate read me
}

// TODO: Create a function to initialize app
function init() {
    //prompt the user with the questions

}

// Function call to initialize app
init();
