const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter your github username',
                name: 'github'
            },
            {
                type: "list",
                name: "license",
                message: "What kind of license should your project have?",
                choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
            },
            {
                type: 'input',
                message: 'Enter your project Title',
                name: 'title'

            },
            {
                type: 'input',
                message: 'Give a description of your project',
                name: 'description'
            },
            {
                type: 'input',
                message: 'Describe your installation process',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'Write out usage',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'List contributor guidelines',
                name: 'contribution'
            },
            {
                type: 'input',
                message: 'Enter Tests info',
                name: 'tests'
            }
        ]);
}

function init() {
    console.log('success');
    try {
        promptUser().then((data) => {
            console.log(data);
            writeFileAsync('README.md', generateMarkdown(data));
            console.log("success");
        });
    } catch (err) {
        console.error(err);
    }
}

init();


