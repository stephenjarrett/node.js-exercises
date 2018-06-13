const fs = require('fs');
const readline = require('readline-sync');

userFile = readline.question("What file do you want to read and capitalize? Please include directory in your answer as well as the file extension: ");

function capitalization(content) {
    return content.toUpperCase();
}


fs.readFile(userFile, function (err, buffer) {
    if (err) {
        console.log(err.message);
    }
    var data = buffer.toString();
    console.log(capitalization(data));
})