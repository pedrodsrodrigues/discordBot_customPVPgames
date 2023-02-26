//* ----- HEADER of the file -----
//! Node's native file system module
let fs = require('fs');

//! Import other files
let messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'server',
    description: 'Server!',
    msgArguments: 'Must not have arguments',
    execute(message, msgArguments) {
        return message.channel.send(`${messages.serverName} ${message.guild.name}\n${messages.totalServerNumbers} ${message.guild.memberCount}`);
    },
};