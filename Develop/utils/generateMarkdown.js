// Creates a function that returns the license link
function renderLicenseLink(license) {
  switch(license){
    case "MIT":

      return `
  This application is covered under [MIT](https://opensource.org/licenses/MIT)
      `;
      break;

    case "GPL":
      return `
  This application is covered under [GPL](https://opensource.org/licenses/GPL-3.0)
      `;
      break;

    case "BSD":
      return `
  This application is covered under [BSD](https://opensource.org/licenses/0BSD)
      `;
      break;

  }
}

// Creates a function that returns the license section of README and the link
// If there is no license, return an empty string
function renderLicenseSection(confirmLicense, license) {
  if(confirmLicense){
    return `
  ## License

    ${renderLicenseLink(license)}
    `;
    } else {
      return ``;
    }
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  // destructure the data
  // console.log(data);
  const {title, description, install, usage, contribution, test, confirmLicense, license, username, email} = data;
  
  return `
# ${title}

${confirmLicense ? `![License](https://img.shields.io/badge/License-${license}-green.svg)` : ``}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
${confirmLicense ? `- [License](#license)` : ""}
- [Questions](#questions)

## Installation

${install}

## Usage

${usage}

## Contribution

${contribution}

## Testing

${test}

${renderLicenseSection(confirmLicense, license)}

## Questions

Have questions? feel free to reach me here:

${email}
https://github.com/${username}

`;
}

module.exports = generateMarkdown;
