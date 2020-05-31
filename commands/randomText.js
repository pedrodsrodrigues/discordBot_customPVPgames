//* ----- HEADER of the file -----
//! Node's native file system module
let fs = require('fs');

//! Import other files
let messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'randomtext',
    aliases: ['rt'],
    description: 'Random text!',
    msgArguments: 1,
    usage: '<text>',
    execute(message, msgArguments) {
        return message.channel.send('Just some random text: ' + msgArguments);
    },
};