//* ----- HEADER of the file -----
//! Node's native file system module
let fs = require('fs');

//! Import other files
let messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'beep',
    description: 'Beep!',
    msgArguments: 'Must not have arguments',
    execute(message, msgArguments) {
        return message.channel.send('Boop.');
    },
};