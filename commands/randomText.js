//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

module.exports = {
    name: 'randomtext',
    description: 'randomText!',
    execute(message, msgArguments) {
        //! If the user sent at least one argument
        if (msgArguments.length) {
            message.reply('Just some random text: ' + msgArguments);
        } else {
            message.channel.send(messages.argumentsNeededError);
        }
    },
};