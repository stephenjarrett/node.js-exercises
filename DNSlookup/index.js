const fs = require('fs');
const readline = require('readline-sync');
const dns = require('dns');

var userDomain = readline.question("Please enter a domain. Leave of https:// in your input: ").toUpperCase();

dns.lookup(userDomain, (err, address, family) => {
    if (!address) {
        console.log('Domain not found. Please enter a valid domain.');
        return;
    }
    console.log(`The IP address of ${userDomain} is: ${address}.`)
})