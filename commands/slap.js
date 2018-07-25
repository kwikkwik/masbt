const Discord = require("discord.js");

exports.run = async (client, message, args, tools, map) => {
     
     let kiss = [
    "https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif",
    "https://media.giphy.com/media/vDHHwJ1J5V41a/giphy.gif",
    "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
      ]

      let hugresult = Math.floor((Math.random() * kiss.length));
      if (!args[0]) {
          const ghembed = new Discord.RichEmbed()
              .setColor(`#3403ba`)
              .setTitle(`${message.author.username} Slap Bakka!!`)
              .setImage(kiss[hugresult])
          message.channel.send({
              embed: ghembed
          })
          return;
      }
      if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
          const hembed = new Discord.RichEmbed()
              .setColor(`#3403ba`)
              .setTitle(`${message.author.username} Slap ${message.mentions.members.first().user.username}`)
              .setImage(kiss[hugresult])
          message.channel.send({
              embed: hembed
          })
          return;
      }
    }
