const Discord = require("discord.js")
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("542045396986232842");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** Welcome To Server Mario Family** `), 4000)        
}
});

client.login(process.env.BOT_TOKEN); 
