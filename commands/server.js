//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

module.exports = {
    name: 'server',
    description: 'Server!',
    execute(message, msgArguments) {
        //! If the user didn't send any argument
        if (!msgArguments.length) {
            message.reply(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        } else {
            message.channel.send(messages.noArgumentsNeededError);
        }
    },
};