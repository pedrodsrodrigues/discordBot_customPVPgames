//* ----- HEADER of the file -----
//! Node's native file system module
let fs = require('fs');

//! Import other files
let messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'userinfo',
    aliases: ['ui'],
    description: 'User info!',
    msgArguments: 0,
    execute(message, msgArguments) {
        return message.reply(`${messages.yourUsername} ${message.author.username}\n${messages.yourID} ${message.author.id}`);
    },
};