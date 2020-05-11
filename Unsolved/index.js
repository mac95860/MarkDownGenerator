const inquirer = require('inquirer');

const fs = require('fs');
const util = require('util');

const generator = require('../Unsolved/utils/generateMarkdown.js');
const api = require('../Unsolved/api');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter your username',
                name: 'username'
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
                message: 'Create your table of Contents' + '\n',
                name: 'contents'
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

async function init() {
    console.log('success');
    try {
        promptUser().then((data) => {
            api.getUser(data.username);
            const readMe = generator.generateMarkdown(data);

            writeFileAsync('README.md', readMe);

            console.log("success");
        });
    } catch (err) {
        console.error(err);
    }
}

init();


