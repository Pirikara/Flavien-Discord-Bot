const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();

const guildId = '614450504419901448';
const channelId = '614450504419901450';

client.login(token).then(() => {
	const guild = client.guilds.get(guildId);
	if(guild && guild.channels.get(channelId)) {
		const lunchDeliveryQuery = `@everyone
        \nHey vous commandez une salade pour ce midi ?
        \nGreen is Better => http://zenorder.co/s/greenisbetter/
        \nDaily Café => https://www.thedailycafe.fr/
        \nSi vous connaissez d'autres restos j'ajouterai à la liste :slight_smile: `;
		guild.channels.get(channelId).send(lunchDeliveryQuery).then(() => client.destroy());
	}
	else {
		console.log('Error: wrong Guild/Channel id');
	}
	client.destroy();
});