module.exports = {
	name: 'about',
	cooldown: 10,
	description: 'Doc / help',
	execute(message) {
		/* message.reply(`__Voilà comment je fonctionne:__
        \nJ'ai un immense besoin **d'attention**, alors si on ne parle pas de moi au moins toute les 2 heures je le prendrais très mal.
        \nVous pouvez m'appeler comme vous voulez *Flavien*, *Flapien*, *Batou*, etc...
        \n|| Vous pouvez aussi désactiver mes caprices pendant 6 heures en écrivant \`Chut Flavien\` ou \`La ferme Flavien\` ||
		\n*Voilà, et n'oubliez pas de parler de moi!*`);*/
		message.reply('Calme toi j\'ai pas fini de bosser...\nLe bot est encore en WIP.');
	},
};