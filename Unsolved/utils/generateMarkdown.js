const generate = { 
  generateMarkdown(data) {
  return `
# ${data.title}


## Description:

  ${data.description}

## Table of Contents:

  ${data.contents}

## Installation Instructions:

  ${data.installation}

## Usage:

  ${data.usage}

## Testing:
  
  ${data.tests}
`;
}
}

module.exports = generate;
