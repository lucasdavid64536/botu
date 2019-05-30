const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
})

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Hello !', `${member}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});
client.on('guildMemberLeave', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Goodbye !', `${member}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.login("NTgzNzIzMTkzMjQ0NzEyOTcx.XPAhMw.kZbk6cq7O8hB6VWwwaqo3BFznDk");
