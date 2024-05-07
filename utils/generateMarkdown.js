// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(
        license
      )})`;
    case "GNU GPLv3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(
        license
      )})`;
    case "Apache 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${renderLicenseLink(
        license
      )})`;
    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](${renderLicenseLink(
        license
      )})`;
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "No license";
  }
  return `This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title} ${renderLicenseBadge(answers.license)}
  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contribution
  ${answers.contribution}

  ## Testing
  ${answers.tests}

  ## License
  ${renderLicenseSection(answers.license)}

  ## Questions
  - GitHub: [${answers.github}](https://github.com/${answers.github})
  - Email: [${answers.email}](mailto:${answers.email})
  `;

}

module.exports = generateMarkdown;
