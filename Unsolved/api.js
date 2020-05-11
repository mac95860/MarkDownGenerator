const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const api = {
    getUser(username) {
        return axios
            .get(
                `http://api.github.com/users/${username}?client_id${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_ID}`
            )
            .catch(err => {
                console.log(`User not found`);
                process.exit(1);
            })
            .then(({ username }) => {
                fs.writeFile('.env', username, function (err) {
                    if (err) {
                        console.error(err);
                    }
                })
            })
    }
};

module.exports = api;