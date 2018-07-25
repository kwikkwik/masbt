const used = process.memoryUsage().heapUsed / 1024 / 1024;
  const Discord = require("discord.js");  
  module.exports.run = async (client, message, args) => {
     if (message.channel.type === 'dm') return;
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];
 
    if (days === 1) {
        dateStrings.push('**1** Days');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** Days');
    }
 
    if (hours === 1) {
        dateStrings.push('**1** Hours');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** Hours');
    }
 
    if (minutes === 1) {
        dateStrings.push('**1** Minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** Minutes');
    }
 
    if (seconds === 1) {
        dateStrings.push('**1** Second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** Seconds');
    }
 
    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    const embed = new Discord.RichEmbed()
  .setTitle("Want Invite Me? ClickHere!")
  .setAuthor("SuperZeta", "https://cdn.discordapp.com/avatars/448504362839441419/4ab618dc2b848fa0b893ae150e398ff1.png?size=2048")
  .setColor(0x080670)
  .setFooter("©SuperZeta | Command : BotInfo", "https://cdn.discordapp.com/avatars/448504362839441419/4ab618dc2b848fa0b893ae150e398ff1.png?size=2048")
  .setThumbnail("https://cdn.discordapp.com/avatars/448504362839441419/4ab618dc2b848fa0b893ae150e398ff1.png?size=2048")
  .setURL("https://discordapp.com/api/oauth2/authorize?client_id=448504362839441419&permissions=0&scope=bot")
  .addField(":pushpin: Name Bot", "SuperZeta", true)
  .addField(":kissing: Developer", "ラナハンサムな#6122", true)
  .addField(":bank: Server Joined", `${client.guilds.size} Servers`, true)
  .addField(":basketball_player: User", `${client.users.size} Users`, true)
  .addField(":file_folder: Ram Usage", ` ${Math.round(used * 100) / 100}MB `, true)
  .addField(':dvd: Library', `Discord.js`, true)
  .addField(':alarm_clock: Uptime ', dateString, true)
    .setTimestamp()
    message.channel.send({embed});
}
