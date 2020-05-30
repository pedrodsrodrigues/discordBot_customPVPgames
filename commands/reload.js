//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'reload',
    description: 'Reload a command!',
    msgArguments: 2,
    execute(message, msgArguments) {
        const commandName = msgArguments[0].toLowerCase();
        const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        //! Verifies if the command/alias that the user gave is valid
        if (!command) {
            // return message.reply(messages.commandNotValidError);
            return message.channel.send(`${message.author} ${messages.commandNotValidError}`);
        }

        // Delete that command from the cache
        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            // Load the command file again
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`Command \`${command.name}\` was reloaded!`);
        } catch (error) {
            console.log(error);
            message.channel.send(messages.unexpectedError);
        }

        //! If the user didn't give any arguments
        if (!msgArguments.length) {
            
        } else {

        }
    },
};