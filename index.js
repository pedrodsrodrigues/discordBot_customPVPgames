//* ----- HEADER of the file -----
//! Node's native file system module
const fs = require('fs');

//! Import other files
const { token, prefix } = require('./config.json');
const messages = require('./messages.json');

//! Require the "discord.js" module and then create a new Discord client
const Discord = require('discord.js');
const client = new Discord.Client();

//! Import all the javascript files from the "commands" folder
// readdirSync() will return an array of all the file names that are on the "commands" folder
// The filter will make sure that it will only have javascript files
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // Set a new item in the Collection with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

//* ----- BODY of the file -----
//! Once the bot is online
client.once('ready', () => {
    console.log('Logged in!');
});

//! Once the bot receives a message
client.on('message', message => {
    //! Ignore messages that don't start with the prefix or are sent by a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Slices off the prefix and then splits it into an array by spaces
    const msgArguments = message.content.slice(prefix.length).split(/ +/);
    // Take the first element in the array (which is the command) and return it, while also removing it from the original array
    // It also puts the command in lower case
    const commandName = msgArguments.shift().toLowerCase();

    //! If there is not a command with that name, exit
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    //! If the command needs arguments
    if (command.msgArguments) {
        //! If the user didn't give any arguments
        if (!msgArguments.length) {
            let reply = messages.argumentsNeededError;

            if (command.usage) {
                reply += `\n${messages.correctCommandUsage} \`${prefix}${command.name} ${command.usage}\``;
            }

            return message.channel.send(reply);
        }
    }
    //! It the command doesn't need any arguments
    else {
        //! If the user gave at least one argument
        if (msgArguments.length) {
            return message.channel.send(messages.noArgumentsNeededError);
        }
    }

    //! If there is a command with that name, execute it
    try {
        command.execute(message, msgArguments);
    }
    //! In case some problem occurred
    catch (error) {
        console.error(error);
        message.channel.send(messages.unexpectedError);
    }
});

client.login(token);