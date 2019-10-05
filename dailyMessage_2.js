const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();

// Nutri Semaine Server
const guildId = '614450504419901448';
// ladresse Channel
const channelId = '614450504419901450';

client.login(token).then(() => {
	const guild = client.guilds.get(guildId);
	if(guild && guild.channels.get(channelId)) {
		const lunchDeliveryQuery = `@everyone
        \nLes gens vous mangez où ce midi ?`;
		guild.channels.get(channelId).send(lunchDeliveryQuery).then(() => client.destroy());
	}
	else {
		console.log('Error: wrong Guild/Channel id');
	}
	client.destroy();
});