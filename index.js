const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("într-un server foarte bine configurat");
});

bot.login(botconfig.token);
