function getGithub(github) {
  return `https://github.com/${github}`;
};

function shield(license, github) {
  return `[![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)](${getGithub(github)})`;

};

function generateMarkdown(data) {
  

  return `
# ${data.title}
## Table of Contents:
  1. License
  2. Description
  3. Installation Instructions
  4. Usage
  5. Testing

## License:
  ${shield(data.license, data.github)}
  Created by: ${getGithub(data.github)}

  
## Description:

  ${data.description}

## Installation Instructions:

  ${data.installation}

## Usage:

  ${data.usage}

## Testing:
  
  ${data.tests}
`;
};


module.exports = generateMarkdown;