const Discord = require('discord.js');
const moment = require("moment");
const talkedRecently = new Set();

exports.run = async (bot, message, args) => {
    if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 10000);
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Please Try With Reason!");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission('ADMINISTRATOR')) { 
    message.channel.send (`Sorry ${message.author}, You Need ADMINISTRATOR Permissions for use this commands!`); 
    return; 
    } if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send(`Sorry ${message.author}, You Need ADMINISTRATOR Permissions for use this commands!!`);

    let kickEmbed = new Discord.RichEmbed()
    .setFooter("©SuperZeta | Command : Kick")
    .setDescription(`**KICKED**`)
    .setColor("#7C00FF")
    .addField("Kicked User", `${kUser}`)
    .addField("Kicked By", `<@${message.author.id}>`)
    .addField("Kicked In", message.channel)
    .addField('Time', `${moment.utc(message.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`,)
    .addField("Reason", kReason);



    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);
}
