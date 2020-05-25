module.exports = {
    name: 'taguser',
    description: 'tagUser!',
    execute(message, msgArguments) {
        //* Grab the FIRST mentioned user from the message
        const taggedUser = message.mentions.users.first();

        message.reply(`The username of the tagged user is: ${taggedUser.username}`);
    },
};