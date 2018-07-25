const Discord = require("discord.js");

exports.run = async (client, message, args, tools, map) => {
     
     let kiss = [
    "https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif?itemid=7324587",
    "https://media1.tenor.com/images/460c80d4423b0ba75ed9592b05599592/tenor.gif?itemid=5044460",
    "https://media1.tenor.com/images/4be3396644e87d3c201f8965104e57b7/tenor.gif?itemid=7539851",
      ]

      let hugresult = Math.floor((Math.random() * kiss.length));
      if (!args[0]) {
          const ghembed = new Discord.RichEmbed()
              .setColor(`#3403ba`)
              .setTitle(`${message.author.username} Get Hugged`)
              .setImage(kiss[hugresult])
          message.channel.send({
              embed: ghembed
          })
          return;
      }
      if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
          const hembed = new Discord.RichEmbed()
              .setColor(`#3403ba`)
              .setTitle(`${message.author.username} Hugged ${message.mentions.members.first().user.username}`)
              .setImage(kiss[hugresult])
          message.channel.send({
              embed: hembed
          })
          return;
      }
    }
