// function to generate markdown for README
function generateMarkdown(respo) {
  return `# ${respo.Title}

  ## Description
  ${respo.Description}

  ## Installation
  ${respo.Installation}

  ## Usage
  ${respo.Use}

  ## How you can contribute
  ${respo.contribute}

  ## Testing included
  ${respo.test}

  ![badge](https://img.shields.io/badge/license-${respo.license}-brightgreen)<br />


`;
}

module.exports = generateMarkdown;
