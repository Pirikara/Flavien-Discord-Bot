module.exports = {
	name: 'batman',
	cooldown: 20,
	description: 'Batman mon héro!',
	execute(message) {
		message.channel.send('Ohh Batman mon super héros préféré!\nhttps://tenor.com/view/batman-gif-3538146');
	},
};