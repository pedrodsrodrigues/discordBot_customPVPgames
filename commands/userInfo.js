//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

module.exports = {
    name: 'userinfo',
    description: 'userInfo!',
    msgArguments: false,
    execute(message, msgArguments) {
        return message.reply(`${messages.yourUsername} ${message.author.username}\n${messages.yourID} ${message.author.id}`);
    },
};