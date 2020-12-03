// function to generate markdown for README
function generateMarkdown(respo) {
  return `# ${respo.Title}

  ![badge](https://img.shields.io/badge/license-${respo.license}-brightgreen)<br />

  ## Table of Contents<br />
  [Description](#Description)<br />
  [Installation](#Installation)<br />
  [Use](#Usage)<br />
  [Contribute](#Contribute)<br />
  [Testing](#Testing)<br />
  [Contact](#Contact)<br />

  ## Description
  ${respo.Description}

  ## Installation
  ${respo.Installation}

  ## Usage
  ${respo.Use}

  ## Contribute
  ${respo.contribute}

  ## Testing
  ${respo.test}

  

  ### Contact
  [${respo.githubuser}](https://github.com/${respo.githubuser}) <br />
  ${respo.email}
 
  

`;
}

module.exports = generateMarkdown;
