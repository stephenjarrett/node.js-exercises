const fs = require('fs');
const readline = require('readline-sync');
const rp = require('request-promise');
const r = require('request');
var options;

function transformURL(userURL) {
    if (userURL.startsWith('www')) {
        return userURL = 'https://' + userURL;
    }
    else if (userURL.startsWith('http')) {
        return userURL;
    }
    else {
        return userURL = 'https://www.' + userURL;
    }
}

var userURL = readline.question("Welcome to website saver!\nPlease enter the URL to the website you would like to save (ex. google.com): ");
var userFileName = readline.question("Please enter the filename you wish to save this page to (ex. test-page.html) ");

userURL = transformURL(userURL);

options = {
    url: userURL,
    strictSSL: false
}

r(options, (error, response, body) => {
    if (error) {
        console.log(error.message);
    }
    fs.writeFile(userFileName, body, err => {
        if (err) {
            return console.log(err.message);
        }
    })
    console.log(`Saved to file ${userFileName}`);
})