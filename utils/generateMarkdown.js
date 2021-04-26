// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#question)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## License
  This application is licensed by ${data.license}


  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  Question: ${data.question} <br/>
  Github: [${data.github}](http://github.com/${data.github}) <br/>
  Reach me out if you have Questions through: ${data.email}




`;
}

module.exports = generateMarkdown;
