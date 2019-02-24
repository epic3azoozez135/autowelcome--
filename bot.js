const Discord = require("discord.js")
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("540921793763082260");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** Welcomme To , __.Debra__ :rose:**`), 4000)        
}
});

client.login(process.env.BOT_TOKEN); 
