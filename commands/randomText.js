module.exports = {
    name: 'randomtext',
    description: 'randomText!',
    execute(message, msgArguments) {
        message.reply('Just some random text: ' + msgArguments);
    },
};