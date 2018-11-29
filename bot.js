const Discord = require("discord.js")
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("517338364220014603");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**-# Welcome To, Debra. :cloud: :wine_glass:  **`), 4000)        
}
});

client.login(process.env.BOT_TOKEN); 
