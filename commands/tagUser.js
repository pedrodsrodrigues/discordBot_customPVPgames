//* ----- HEADER of the file -----
//! Node's native file system module
let fs = require('fs');

//! Import other files
let messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'taguser',
    aliases: ['tu'],
    description: 'Tag user!',
    msgArguments: 'Must have arguments',
    usage: '<mention>',
    execute(message, msgArguments) {
        //! If the user mentioned someone at least once
        if (message.mentions.members.first()) {
            //* Grab the FIRST mentioned user from the message
            let taggedUser = message.mentions.users.first();

            return message.channel.send(`${messages.taggedUsersUsername} ${taggedUser.username}`);
        } else {
            return message.reply(messages.noMentionsError);
        }
    },
};