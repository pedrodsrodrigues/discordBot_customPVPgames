//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const messages = require('../messages.json');

const { prefix } = require('../config.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'Help!',
    msgArguments: 2,
    execute(message, msgArguments) {
        const data = [];
        const { commands } = message.client;

        //! If the user didn't give any arguments
        if (!msgArguments.length) {
            data.push(messages.allCommandsList);
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\n${messages.youCanSend} \`${prefix}${messages.specificHelp}`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply(messages.dmSent);
                })
                .catch(error => {
                    console.error(`${messages.dmNotPossibleConsoleError} ${message.author.tag}.\n`, error);
                    message.reply(messages.dmNotPossibleError);
                });
        }

        const name = msgArguments[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        //! Verifies if the command/alias that the user gave is valid
        if (!command) {
            return message.reply(messages.commandNotValidError);
        }

        data.push(`${messages.commandName} ${command.name}`);

        //! If the command has that property
        if (command.aliases) data.push(`${messages.commandAliases} ${command.aliases.join(', ')}`);
        if (command.description) data.push(`${messages.commandDescription} ${command.description}`);
        if (command.usage) data.push(`${messages.commandUsage} ${prefix}${command.name} ${command.usage}`);

        return message.channel.send(data, { split: true });
    },
};