const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('tutorial ', 'https://www.twitch.tv/lucasdavid913')
})

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Nume: ', `${member}`)
        .addField('✘ | Bun Venit !', `Speram ca esti abont pe canal daca nu #anunturi , ${member}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.login("NDU0MzIwMjQyOTMyNTgwMzYz.Dfrucw.K3FNwekwZ6FQn-ypPR0kz-CCA4Y");
