//* ----- HEADER of the file -----
//! Node's native file system module
let fs = require('fs');

//! Import other files
let messages = require('../messages.json');

//* ----- BODY of the file -----
module.exports = {
    name: 'reload',
    description: 'Reload a command!',
    msgArguments: 2,
    usage: '<command>',
    execute(message, msgArguments) {
        // TODO: Make this command only usable by me

        //! If the user sent at least one argument
        if (msgArguments.length) {
            let commandName = msgArguments[0].toLowerCase();

            //! If there is not a command (or alias) with that name, exit
            let command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

            //! Verifies if the command/alias that the user gave is valid
            if (!command) {
                return message.reply(messages.commandNotValidError);
            }

            // Delete that command from the cache
            delete require.cache[require.resolve(`./${command.name}.js`)];

            let newCommand = require(`./${command.name}.js`);

            // Add the loaded command to "client.commands" once again
            message.client.commands.set(newCommand.name, newCommand);

            message.channel.send(`${messages.command} \`${command.name}\` ${messages.reloaded}`);
        }
        //! If the user didn't send any arguments
        else {
            //! Require the "discord.js" module and then create a new Discord client
            let Discord = require('discord.js');
            let client = new Discord.Client();

            //! Import all the javascript files from the "commands" folder
            // readdirSync() will return an array of all the file names that are on the "commands" folder
            // The filter will make sure that it will only have javascript files
            client.commands = new Discord.Collection();
            let commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

            for (let file of commandFiles) {
                let commandFile = require(`./${file}`);

                // Set a new item in the Collection with the key as the command name and the value as the exported module
                client.commands.set(commandFile.name, commandFile);

                // Delete that command from the cache
                delete require.cache[require.resolve(`./${file}`)];

                let newCommand = require(`./${file}`);

                // Add the loaded command to "client.commands" once again
                message.client.commands.set(newCommand.name, newCommand);
            }
            message.channel.send(`${messages.commandsReloaded}`);
        }
    },
};