

module.exports ={
name:'avatar',
description:'print user avatar',

execute(message,args,Discord){
let mention = message.mentions.members.first();

if(!mention ) {

    mention = message.member;
}
    const userAvatar = new Discord.MessageEmbed()


.setColor( 0x333333)
.setAuthor(mention.user.username)
.setImage(mention.user.displayAvatarURL())

//console.log(message.author.avatarURL)
message.channel.send(userAvatar);





}





}