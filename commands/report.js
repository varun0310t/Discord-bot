const { Client, Message } = require("discord.js");

module.exports={
name:'report',
categaroy:'moderation',
description:'report a user of your choice ',

execute(Client,message,args,Discord) {


let mention = message.mentions.members.first()
if(!mention){


    message.reply('Please mention a user for report')

}else{
let reason = message.content.slice(30)
//console.log(reason);
if (!reason){
    message.reply('Please send  a reason for the report')
}
let ava = mention.user.displayAvatarURL()

let embed = new Discord.MessageEmbed()
.setTitle('New report')
.setDescription(`The member ${message.author.tag} has reported the user ${mention.user.tag}   `)
.setColor('RED')
.setThumbnail(ava)
.addFields(
{name:'Member id', value:`${message.author.id}`},
{name:'Member tag', value:`${message.author.tag}`,inline:true},
{name:'Reported id', value:`${mention.id}`},
{name:'Reported tag', value:`${mention.user.tag}`,inline:true},
{name:'Reason', value: reason ,inline:true},
{name:'Date', value: `${new Intl.DateTimeFormat().format(Date.now())}`,inline:true},
)
message.reply('your report has been recorded');
//message.channel.send(embed);
Client.channels.cache.get('807482543226093619').send(embed);




}




}


}
