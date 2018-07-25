 const used = process.memoryUsage().heapUsed / 1024 / 1024;
  const Discord = require("discord.js");  
  module.exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Want Invite Me? ClickHere!")
  .setAuthor("SuperZeta", "https://cdn.discordapp.com/avatars/448504362839441419/4ab618dc2b848fa0b893ae150e398ff1.png?size=2048")
  .setColor(0x080670)
  .setFooter("©SuperZeta | Command : Help", "https://cdn.discordapp.com/avatars/448504362839441419/4ab618dc2b848fa0b893ae150e398ff1.png?size=2048")
  .setThumbnail("")
  .setURL("https://discordapp.com/api/oauth2/authorize?client_id=448504362839441419&permissions=0&scope=bot")
  .addField(":musical_note: Musical","`Play`,`Skip`,`Resume`,`Pause`,`Np`,`Queue`")
  .addField(":tada: Fun","`Slap`,`Hug`,`Kiss`,`Cry`,`8ball`,`McSay`")
  .addField(":envelope: Utility","`Avatar`,`Userinfo`,`Guild`,`Serverinfo`,`Say`,`Invite`")
  .addField(":warning: Administration","`Kick`,`Ban`,`Purge`")
  .setTimestamp()
    message.channel.send({embed});
}
