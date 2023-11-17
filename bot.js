const { Client, Intents, MessageEmbed } = require('discord.js');
const axios = require('axios');
const config = require('./config.json');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

const PREFIX = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  checkUrls(); // Führe die Funktion beim Start aus
  setInterval(checkUrls, 600000); // Alle 10 Minuten (600000 Millisekunden) ausführen
});

client.login('DEIN_BOT_TOKEN');

async function checkUrls() {
  const embed = new MessageEmbed().setTitle('Server Status').setColor('#00ff00');

  for (const server of config.servers) {
    const { name, url } = server;
    try {
      await axios.get(`http://${url}`);
      embed.addField(name, 'Erreichbar', true);
    } catch (error) {
      embed.addField(name, 'Nicht erreichbar', true);
    }
  }

  // Hier kannst du das Embed in den gewünschten Kanal senden
  client.channels.cache.get('').send({ embeds: [embed] });
  console.log('Serverstatus aktualisiert');
}

client.login('TOKEN');
