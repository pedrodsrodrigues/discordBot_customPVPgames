//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

module.exports = {
    name: 'taguser',
    description: 'tagUser!',
    execute(message, msgArguments) {
        //! If the user sent at least one argument
        if (msgArguments.length) {
            //! If the user mentioned someone at least once
            if (message.mentions.members.first()) {
                //* Grab the FIRST mentioned user from the message
                const taggedUser = message.mentions.users.first();

                message.reply(`The username of the tagged user is: ${taggedUser.username}`);
            } else {
                message.channel.send(messages.oneMentionError);
            }
        } else {
            message.channel.send(messages.argumentsNeededError);
        }
    },
};