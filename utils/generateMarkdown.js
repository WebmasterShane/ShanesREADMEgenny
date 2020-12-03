// function to generate markdown for README
function generateMarkdown(respo) {
  return `# ${respo.Title}

  ![badge](https://img.shields.io/badge/license-${respo.license}-brightgreen)<br />

  #Table of Contents<br />
  [Description](#Description)<br />
  [Installation](#Installation)<br />
  [Use](#Usage)<br />
  [Contribute](#How you can contribute)<br />
  [Testing](#Testing included)<br />
  [Contact](#Contact Me)<br />

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

  

  ### Contact Me
  [${respo.githubuser}](github.com/${respo.githubuser}) <br />
  ${respo.email}


  [![ForTheBadge built-by-WebmasterShane](http://ForTheBadge.com/images/badges/built-by-developers.svg)](https://GitHub.com/WebmasterShane/)


`;
}

module.exports = generateMarkdown;
