//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

module.exports = {
    name: 'beep',
    description: 'Beep',
    execute(message, msgArguments) {
        //! If the user didn't send any argument
        if (!msgArguments.length) {
            message.reply('Boop.');
        } else {
            message.channel.send(messages.noArgumentsNeededError);
        }
    },
};