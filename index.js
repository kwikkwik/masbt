const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const prefix = "./config.json";
const express = require('express');
const http = require('http');
const app = express();
const cooldown = new Set();
const moment = require("moment");
const buffering = client.emojis.get("458528361195503617");
// Configuration

// NOTE:
// The following code is part of the <client>.on('message') event:
// Modules Required: quick.db


const DBL = require("dblapi.js");
const dbl = new DBL('-', client);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! something missing here ${e}`);
})

// NOTE:
// The following code is a command:



app.get("/", (request, response) => {
  console.log(Date.now() + " Pinging Done");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

 client.on("ready", async () => {
  console.log(`${client.user.username} Sudah online!`);
  client.user.setStatus('AVAILABLE');
 client.user.setActivity(`~help | ${client.users.size} Users!`, 'https://www.twitch.tv/monstercat');      
});

function timestamp(addon_msg) {
    let calendar = new Date();
    // ECMA 2017 String.prototype.padStart(), IE not supported
    let d = calendar.getDate().toString().padStart(2, 0);
    let m = calendar.getMonth().toString().padStart(2, 0);
    let y = calendar.getFullYear().toString().padStart(2, 0);
    let h = calendar.getHours().toString().padStart(2, 0);
    let mm = calendar.getMinutes().toString().padStart(2, 0);
    let s = calendar.getSeconds().toString().padStart(2, 0);
    const viewer = `[${d}-${m}-${y}|${h}\:${mm}\:${s}] [${addon_msg}]`;
    return viewer;
}

// timestamp(addon_msg) => addon_msg = Custom string, you can insert custom text there.
// usage:

console.log(`${timestamp("ReadyBot")} Bot has successfully deployed!`);

// output (on time):
// [01-01-2001|10:10:10] [ReadyBot] Bot has successfully deployed!

console.log(`${timestamp("ErrorOccured")} Hmm, there was something missing!`);

// output (on time):
// [01-01-2001|10:10:10] [ErrorOccured] Hmm, there was something missing!

client.on("message", async message => {
    if(message.author.bot) return;
	if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
try {
    let comamnds = require(`./commands/${command}.js`);
    comamnds.run(client, message, args);
  } catch (e) {
    console.log(e.stack)
  } finally {
     console.log(`${message.author.tag} memakai perintah ${command}`)
  }
});



client.login(process.env.token);
