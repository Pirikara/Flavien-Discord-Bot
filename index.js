/* eslint-disable indent */
const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// For cooldowns stuff
const cooldowns = new Discord.Collection();

// Read files to find commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Loop on directory to add commands files to array
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Print "Ready!" in the console when the bot is ready to be used
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {

    let commandName = new String();
    const nicknames = ['flavien', 'fla', 'flafla', 'flapien', 'batou'];
    const messageContent = message.content.toLowerCase();
    const isFlavienTriggered = nicknames.some(nickname => messageContent.includes(nickname));
    const wannaSeeRule = messageContent.includes('about?') || messageContent.includes('about ?');
    const wannaPauseFlavien = messageContent.includes('tg') || messageContent.includes('ta gueule') || messageContent.includes('la ferme') || messageContent.includes('stop');

    // Feature 1: Thanks for your attention
    if (isFlavienTriggered && !wannaSeeRule && !wannaPauseFlavien && !messageContent.includes('fla le bg')) {
        commandName = 'insecure';
    }

    // Feature 2: Help / Doc
    else if (isFlavienTriggered && wannaSeeRule && !wannaPauseFlavien) {
        commandName = 'about';
    }

    // Feature 3: Batman!
    else if(messageContent.includes('batman') && !message.author.bot) {
        commandName = 'batman';
    }

    // Feature 4: Fla le bg
    else if(messageContent.includes('fla le bg') && !message.author.bot && !wannaPauseFlavien && !wannaSeeRule) {
        commandName = 'flaLeBg';
    }

    // Feature 5: Met le bot en pause
    else if(isFlavienTriggered && !wannaSeeRule && wannaPauseFlavien && !message.author.bot) {
        commandName = 'pause';
    }

    // TODO Feature 6: Daily events

    // When incompatible Feature are used in the same message
    else if(isFlavienTriggered && wannaSeeRule && wannaPauseFlavien) {
        message.reply('ta commande est même pas bonne en plus xD\nJe suis pas venu ici pour souffrir okay!');
    }

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    /**
     * Manage cooldown stuffs
     */

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Non mais stp tu peux attendre ${timeLeft.toFixed(1)} sec au lieu de spammer?\nEn plus y'a tout le monde qui me contacte en même temps sur Teams, ça prend trop la tête putain!`);
        }
    }
    else {
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }
    // End of cooldown stuffs

    try {
        command.execute(message);
    }
    catch (error) {
        console.error(error);
        message.reply('ta commande est même pas bonne en plus xD.\nJe suis pas venu ici pour souffrir okay!');
    }

});

client.login(token);