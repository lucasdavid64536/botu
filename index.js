const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

client.on('ready', () => {
  client.user.setGame('Type || ^^help ', 'https://www.twitch.tv/streamerhouse%27)
})

bot.login(botconfig.token);
