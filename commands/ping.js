module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, msgArguments) {
        message.reply('Pong.');
    },
};