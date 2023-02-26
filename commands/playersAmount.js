//* ----- HEADER of the file -----
//! Node's native file system module
let fs = require('fs');

//! Import other files
let messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'playersamount',
    aliases: ['pa'],
    description: 'Players amount!',
    msgArguments: 'Must have arguments',
    usage: '<number of players>',
    execute(message, msgArguments) {
        let amount = parseInt(msgArguments[0]);

        if (isNaN(amount)) {
            //! If the first argument is 'undefined'
            if (msgArguments[0] === 'undefined') {
                return message.channel.send(messages.undefinedPlayersNumbers);
            } else {
                return message.reply(messages.notNumber);
            }
        } else {
            return message.channel.send(`${messages.playersSet} ` + amount);
        }
    },
};