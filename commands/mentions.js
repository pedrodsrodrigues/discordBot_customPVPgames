module.exports = {
    name: 'mentions',
    description: 'mentions!',
    execute(message, msgArguments) {
        const mentions = message.mentions.users.map(user => {
            return `${user.username} was mentioned!`;
        });

        //* Send the entire array of strings as a message - which, by default, discord.js will '.join()' the array with '\n'
        message.channel.send(mentions);
    },
};