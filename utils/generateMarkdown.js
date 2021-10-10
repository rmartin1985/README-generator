// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const renderBadge = `![](https://img.shields.io/badge/license-${license}-blue)`;
    if (license == "None") {
        return ""
    } else {
        return renderBadge;
    }
}

function renderTests(tests) {
    const createTest = `${tests}`
    if (tests === "") {
        return `No tests created for this project.`
    } else {
        return createTest;
    }
}

// found it easier just to generate the license in the generateMarkdown function instead of trying to use three separate functions in the starter code

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](##installation)
  2. [Usage](#usage)
  3. [Contributions](#contributions)
  4. [Questions](#questions)
  5. [License](#license)
  6. [Tests](#tests)
  

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
  [${data.license}](https://choosealicense.com/licenses/${data.license.toLowerCase()}/)

  ## Tests
  ${renderTests(data.tests)}
 `;
}

module.exports = generateMarkdown;