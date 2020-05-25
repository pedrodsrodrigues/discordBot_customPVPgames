module.exports = {
    name: 'beep',
    description: 'Beep',
    execute(message, msgArguments) {
        message.reply('Boop.');
    },
};