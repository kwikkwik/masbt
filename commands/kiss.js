const Discord = require("discord.js");

exports.run = async (client, message, args, tools, map) => {
let kiss = [
   "https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127",
  "https://media1.tenor.com/images/b011c3ec014e3fc90b071e477e9f9054/tenor.gif?itemid=5601384",
  "https://media1.tenor.com/images/43eb78dfc521484fa5d2e6c26ef2dc1b/tenor.gif?itemid=6246226",
    
  ]
  let hugresult = Math.floor((Math.random() * kiss.length));
  if (!args[0]) {
      const ghembed = new Discord.RichEmbed()
          .setColor(`#3403ba`)
          .setTitle(`${message.author.username} kiss themself...! (weirdo)`)
          .setImage('https://cdn.discordapp.com/attachments/452115003659780096/460369555823525898/kiss.gif')
      message.channel.send({
          embed: ghembed
      })
      return;
  }
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
      const hembed = new Discord.RichEmbed()
          .setColor(`#3403ba`)
          .setTitle(`${message.author.username} kiss ${message.mentions.members.first().user.username}!`)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: hembed
      })
      return;
  }
  const ghembed = new Discord.RichEmbed()
      .setColor(`#3403ba`)
      .setTitle(`${message.author.username} hugged themself...! (weirdo)`)
      .setImage('https://media1.tenor.com/images/1bd2043dc086c0eface678f3c01b7109/tenor.gif?itemid=7274045')
  message.channel.send({
      embed: ghembed
  })
} 
