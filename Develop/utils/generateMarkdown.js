// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // https://img.shields.io/badge/License-<STATUS>-<COLOR>.svg
  //using the license selected, generate the badge
  return `
  ![License](https://img.shields.io/badge/License-${license}-green.svg)
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //using the license selected, generate the link
  if(license){
    return `
  this is the license link
    `;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //destructure the data
  const {title, description, install, usage, test, license, username, email} = data;
  
  return `
  # ${title}

  ### License
  ${renderLicenseSection(license)}

  ## Description

  ${description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation

  ${install}

  ## Usage

  ${usage}

  ## Tests

  ${test}

  ## Questions

  Have questions? feel free to reach me here:

  ${email}
  https://github.com/${username}

`;
}

module.exports = generateMarkdown;
