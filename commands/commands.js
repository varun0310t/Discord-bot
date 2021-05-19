module.exports= {
name:'commands',
description:'give the list the commands bot currently have',
 
execute(message,args,Discord){ 

const embed = new Discord.MessageEmbed()
.setColor('#002FA7')
.setTitle('Commands')
.setDescription('This is the list of commands bot currently have')
.addFields(

    {name:'-----------------------------------------------', value :'--------------------------------------'},


{ name:'delete', value :'This command will bulk delete messages'},

{ name:'giveweeb', value :'This command will give weeb role   (no use i know )'},

{ name:'mute', value :'This command will mute a member can be used with timer example ($mute @member 10s)'},

{ name :'unmute', value : 'this command will unmute a member '},

{ name: 'ava', value:'This command  will print  Avatar of your or mentioned member accrording to your command'},

{ name:'-----------------------------------------------', value :'--------------------------------------'},

)


.setFooter('more commands will be added in future ');
  

message.channel.send(embed);
}





}