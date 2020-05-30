//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

module.exports = {
    name: 'server',
    description: 'Server!',
    msgArguments: false,
    execute(message, msgArguments) {
        return message.reply(`${messages.serverName} ${message.guild.name}\n${messages.totalServerNumbers} ${message.guild.memberCount}`);
    },
};