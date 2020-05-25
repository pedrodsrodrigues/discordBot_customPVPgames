module.exports = {
    name: 'server',
    description: 'Server!',
    execute(message, msgArguments) {
        message.reply(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};