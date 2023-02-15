// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Github licence(https://img.shields.io/badge/license-${data.license}-green.svg)
  ## https://opensource.org/licenses/${data.license}
  
  ## Description 
  ${data.description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)
  
  ## How does one install this readme generator? 
  ${data.installation}

  ## How does one use this readme generator? 
  ${data.usage}

  ## Test 
  ${data.test}

  ## If you are contributing, please provide your email address. 
  ${data.email}

  ## How does one test this readme generator? 
  ${data.test}

  ## Questions 
  If there are any questions or concerns about this readme generator, please email ${data.email} or https://github.com/${data.github}.

  ## License
${data.license} https://img.shields.io/badge/license-${data.license}-green.svg
https://opensource.org/licenses/${data.license}
  `;
}



module.exports = generateMarkdown;
