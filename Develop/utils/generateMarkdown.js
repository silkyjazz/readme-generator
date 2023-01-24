// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


const fs = require('fs');
//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }else{
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'Apache'){
  return `link`
}
if (license === 'MIT'){
  return `link`
}
if (license === 'General Public License')
 return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return ``
  }else{
    return `## Licenses 
    ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ## Table of Contents
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contributors](#contributors)
    -[Tests](#tests)
    -[Licenses](#licenses)
    -[Questions](#questions)
    -[Credits](#credits)

     
    ## Description 
    ${data.description}

    ## Installation
    ${data.installation}


    ## Usage
    ${data.usage}

    ## Contributors
    ${data.contributors}

    ## Tests
    ${data.test}

    ## Licenses

    ## Questions
    If you have questions, reach out on Github. Github: https://github.com/${data.github} or via email at ${data.email}

    ## Credits
    All rights and credits reserved to ${data.name}.
`;
}

module.exports = generateMarkdown;
