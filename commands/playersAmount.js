//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'playersamount',
    description: 'playersAmount!',
    msgArguments: true,
    usage: '<number of players>',
    execute(message, msgArguments) {
        const amount = parseInt(msgArguments[0]);

        if (isNaN(amount)) {
            //! If the first argument is 'undefined'
            if (msgArguments[0] === 'undefined') {
                return message.channel.send(messages.undefinedPlayersNumbers);
            } else {
                return message.channel.send(messages.notNumber);
            }
        } else {
            return message.channel.send(`${messages.playersSet} ` + amount);
        }
    },
};