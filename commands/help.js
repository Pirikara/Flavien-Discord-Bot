module.exports = {
	name: 'about',
	cooldown: 10,
	description: 'Doc / help',
	execute(message) {
		message.reply(`__Voilà comment je fonctionne:__
        \nJ'ai un immense besoin **d'attention**, alors si on ne parle pas de moi au moins toute les 2 heures je le prendrais très mal.
        \nVous pouvez m'appeler comme vous voulez *Flavien*, *Flapien*, *Batou*, etc...
        \n|| Vous pouvez aussi désactiver mes caprices pendant 6 heures en écrivant \`ta gueule flavien\` ou \`tg flavien\` ||
        \n*Voilà, et n'oubliez pas de parler de moi!*`);
	},
};