const fs = require('fs');
const readline = require('readline-sync');

var inputFile = readline.question("What file do you want to read and capitalize? Please include directory in your answer as well as the file extension: ");
var outputFile = readline.question("What file do you want to read and capitalize? Please include directory in your answer as well as the file extension: ");

function capitalization(content) {
    return content.toUpperCase();
}

function writeAFile(dataCapitalized) {
    fs.writeFile(outputFile, dataCapitalized, err => {
        if (err) {
            return console.log(err.message);
        }})
    console.log(`The file was saved as ${outputFile}!`);
}

fs.readFile(inputFile, function (err, buffer) {
    if (err) {
        console.log(err.message);
    }
    var data = buffer.toString();
    var dataCapitalized = capitalization(data);
    writeAFile(dataCapitalized);
})