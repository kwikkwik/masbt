const Discord = require("discord.js");
exports.run = async (client, message, args, tools, map) => {
const sayMessage = args.join(" ");
message.delete().catch(O_o=>{}); 
message.channel.send(sayMessage);
}
