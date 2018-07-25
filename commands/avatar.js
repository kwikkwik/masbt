const Discord = require('discord.js');

/*
The code base is from :
https://github.com/shidoitsuka/another-miku-bot
Thanks to him!! COOLAH CODAA!!! ^^--^^
*/

exports.run = (auru, message, args) => {
    if (!message.mentions.users.size) {
      let avanya = new Discord.RichEmbed()
        .setTimestamp()
        .setAuthor(`${message.author.username} | Avatar`, "", message.author.displayAvatarURL)
        .setColor(0x080670)
        .setFooter(`©SuperZeta | Command : Avatar`)
        .setImage(message.author.displayAvatarURL);
    message.channel.send(avanya)
    } else {
      var mentionMember = message.mentions.users.first();
      let avanya = new Discord.RichEmbed()
        .setTimestamp()
        .setAuthor(`${mentionMember.username} | Avatar`, "", mentionMember.displayAvatarURL)
        .setColor(0x080670)
        .setImage(mentionMember.displayAvatarURL)
        .setFooter(`©SuperZeta | Command : Avatar`);
      message.channel.send(avanya)
    }
  };
