module.exports = {
	name: 'insecure',
	cooldown: 5,
	description: 'Donnez moi de l\'attention!',
	execute(message) {
		message.channel.send('Ohh Merci! :heart:');
	},
};