const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  client.user.setGame('Type || ^^help ', 'https://www.twitch.tv/streamerhouse%27');
});

bot.login(botconfig.token);
