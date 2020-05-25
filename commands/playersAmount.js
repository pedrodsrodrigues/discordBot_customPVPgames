module.exports = {
    name: 'playersamount',
    description: 'playersAmount!',
    execute(message, msgArguments) {
        const amount = parseInt(msgArguments[0]);

        if (isNaN(amount)) {
            //! If the first argument is 'undefined'
            if (msgArguments[0] === 'undefined') {
                message.channel.send('Undefined number of players.');
            } else {
                message.channel.send(messages.error);
            }
        } else {
            message.channel.send('Number of players set: ' + amount);
        }
    },
};