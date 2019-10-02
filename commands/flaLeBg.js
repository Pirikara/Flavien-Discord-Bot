module.exports = {
	name: 'flaLeBg',
	cooldown: 20,
	description: 'Easter Egg',
	execute(message) {
		const { alexis, gwen, rafael, valerio } = require('../ovation.json');

		// Alexis
		if(message.author.id == 507547603076907018) {
			message.channel.send(`Ohhhhh bien joué, ${alexis.ovation}\nVoilà comment les vrais m'appellent!!`);
		}
		// Gwen
		else if(message.author.id == 599746478126399499) {
			message.channel.send(`Ohhhhh bien joué, ${gwen.ovation}\nVoilà comment les vrais m'appellent!!`);
		}
		// Rafael
		else if(message.author.id == 204294714411843586) {
			message.channel.send(`Ohhhhh bien joué, ${rafael.ovation}\nVoilà comment les vrais m'appellent!!`);
		}
		// Valerio
		else if(message.author.id == 621277816742477824) {
			message.channel.send(`Ohhhhh bien joué, ${valerio.ovation}\nVoilà comment les vrais m'appellent!!`);
		}
	},
};