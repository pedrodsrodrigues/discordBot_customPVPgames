//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'playersamount',
    description: 'playersAmount!',
    execute(message, msgArguments) {
        //! If the user sent at least one argument
        if (msgArguments.length) {
            const amount = parseInt(msgArguments[0]);

            if (isNaN(amount)) {
                //! If the first argument is 'undefined'
                if (msgArguments[0] === 'undefined') {
                    message.channel.send('Undefined number of players.');
                } else {
                    message.channel.send(messages.errorMessage);
                }
            } else {
                message.channel.send('Number of players set: ' + amount);
            }
        } else {
            message.channel.send(messages.argumentsNeededError);
        }
    },
};