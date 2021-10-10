// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const renderBadge = `[badge](https://img.shields.io/badge/License-${license}-blue?style=flat-square)`;
    if (license == "None") {
        return "No license used for this project"
    } else {
        return renderBadge;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//     let licenseLink = `(https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
//     return `[${data.license}]${licenseLink}`
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//     renderLicenseLink(license);
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Instalation](##instalation)
  2. [Usage](#usage)
  3. [Contributions](#contributions)
  4. [Questions](#questions)
  5. [License](#license)
  

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Questions

  If you have any questions regarding this project, you can reach me at my GitHub account or by email at:
  <br>
  Github: [${data.github}](https://github.com/${data.github})
  <br>
  Email: ${data.email}

  ## License
  
`;
}

module.exports = generateMarkdown;