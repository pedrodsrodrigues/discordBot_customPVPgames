//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'taguser',
    aliases: ['tu'],
    description: 'Tag user!',
    msgArguments: 1,
    usage: '<mention>',
    execute(message, msgArguments) {
        //! If the user mentioned someone at least once
        if (message.mentions.members.first()) {
            //* Grab the FIRST mentioned user from the message
            const taggedUser = message.mentions.users.first();

            return message.channel.send(`${messages.taggedUsersUsername} ${taggedUser.username}`);
        } else {
            return message.reply(messages.noMentionsError);
        }
    },
};