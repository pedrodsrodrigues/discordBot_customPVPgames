//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'mentions',
    description: 'Mentions!',
    msgArguments: 1,
    usage: '<mention>',
    execute(message, msgArguments) {
        //! If the user mentioned someone at least once
        if (message.mentions.members.first()) {
            const mentions = message.mentions.users.map(user => {
                return `${user.username} ${messages.wasMentioned}`;
            });

            // Send the entire array of strings as a message - which, by default, discord.js will '.join()' the array with '\n'
            message.channel.send(mentions);
        } else {
            return message.reply(messages.noMentionsError);
        }
    },
};