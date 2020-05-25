module.exports = {
    name: 'userinfo',
    description: 'userInfo!',
    execute(message, msgArguments) {
        message.reply(`Your username is: ${message.author.username}\nYour ID: ${message.author.id}`);
    },
};