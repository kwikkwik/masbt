const Discord = require("discord.js");
exports.run = async (auru, message, args) => {
		let bicon = auru.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setColor("0x7C00FF")
			.addField("Bot Invite", "[ClickHere](https://discordapp.com/api/oauth2/authorize?client_id=448504362839441419&permissions=0&scope=bot)", true)
      .setFooter("©SuperZeta | Command : Invite")
    	.setThumbnail("https://raw.githubusercontent.com/vzrenggamani/vzrenggamani.github.io/master/src/737487-crop.png")
		  .setTimestamp()
    message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
} 
