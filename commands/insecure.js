module.exports = {
	name: 'insecure',
	cooldown: 5,
	description: 'Donnez moi de l\'attention!',
	execute(message) {
		const { alexis, gwen, rafael, valerio } = require('../cheers.json');

		const amountOfQuote = 4;

		const alexisQuotes = [];
		const gwenQuotes = [];
		const rafaelQuotes = [];
		const valerioQuotes = [];

		for (let i = 0; i < amountOfQuote; i++) {
			alexisQuotes.push(alexis[i]);
			gwenQuotes.push(gwen[i]);
			rafaelQuotes.push(rafael[i]);
			valerioQuotes.push(valerio[i]);
		}

		// Generate a random number between 1 and the amount of quote
		const randomQuote = Math.floor((Math.random() * amountOfQuote) + 1);

		// Alexis
		if(message.author.id == 507547603076907018) {
			message.channel.send(`${alexisQuotes[randomQuote]}`);
		}
		// Gwen
		else if(message.author.id == 599746478126399499) {
			message.channel.send(`${gwenQuotes[randomQuote]}`);
		}
		// Rafael
		else if(message.author.id == 204294714411843586) {
			message.channel.send(`${rafaelQuotes[randomQuote]}`);
		}
		// Valerio
		else if(message.author.id == 621277816742477824) {
			message.channel.send(`${valerioQuotes[randomQuote]}`);
		}
	},
};