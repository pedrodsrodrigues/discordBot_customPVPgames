//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

module.exports = {
    name: 'randomtext',
    description: 'randomText!',
    msgArguments: true,
    usage: '<text>',
    execute(message, msgArguments) {
        return message.reply('Just some random text: ' + msgArguments);
    },
};