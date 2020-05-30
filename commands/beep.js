//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

module.exports = {
    name: 'beep',
    description: 'Beep',
    msgArguments: false,
    execute(message, msgArguments) {
        return message.reply('Boop.');
    },
};