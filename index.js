const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('tutorial ', 'https://twitch.tv/lucasdavid913')
})

client.login("NDU0MzIwMjQyOTMyNTgwMzYz.Dfrucw.K3FNwekwZ6FQn-ypPR0kz-CCA4Y");
