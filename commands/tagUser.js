//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

module.exports = {
    name: 'taguser',
    description: 'tagUser!',
    msgArguments: true,
    usage: '<mention>',
    execute(message, msgArguments) {
        //! If the user mentioned someone at least once
        if (message.mentions.members.first()) {
            //* Grab the FIRST mentioned user from the message
            const taggedUser = message.mentions.users.first();

            return message.reply(`${messages.taggedUsersUsername} ${taggedUser.username}`);
        } else {
            return message.channel.send(messages.noMentionsError);
        }
    },
};