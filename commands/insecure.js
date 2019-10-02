module.exports = {
	name: 'insecure',
	cooldown: 5,
	description: 'Donnez moi de l\'attention!',
	execute(message) {
		const { alexis, gwen, rafael, valerio, guillaume } = require('../cheers.json');

		const amountOfQuote = 8;

		const alexisQuotes = [];
		const gwenQuotes = [];
		const rafaelQuotes = [];
		const valerioQuotes = [];
		const guillaumeQuotes = [];

		for (let i = 0; i < amountOfQuote; i++) {
			alexisQuotes.push(alexis[i]);
			gwenQuotes.push(gwen[i]);
			rafaelQuotes.push(rafael[i]);
			valerioQuotes.push(valerio[i]);
			guillaumeQuotes.push(guillaume[i]);
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
		// Guillaume
		else if(message.author.id == 394146745086640133) {
			message.channel.send(`${guillaumeQuotes[randomQuote]}`);
		}
	},
};