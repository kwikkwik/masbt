  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  const Discord = require("discord.js");  
  module.exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setColor(0x080670)
  .setFooter("©SuperZeta | Command : Vote", "https://cdn.discordapp.com/avatars/448504362839441419/4ab618dc2b848fa0b893ae150e398ff1.png?size=2048")
  .setThumbnail("https://media.giphy.com/media/l1J9JrVtmvUxlaSfC/giphy.gif")
  .setURL("https://media.giphy.com/media/l1J9JrVtmvUxlaSfC/giphy.gif")
  .addField("Website Link","[Click Here](https://discordbots.org/bot/448504362839441419)")
  .addField("Vote Link","[Click Here](https://discordbots.org/bot/448504362839441419/vote)")
  .setTimestamp()
    message.channel.send({embed});
}
