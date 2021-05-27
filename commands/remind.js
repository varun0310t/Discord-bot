const ms = require ('ms');


module.exports={
name:'remind',
description:'remind user according to their commands',

execute(message,args){

let target = message.mentions.members.first();


if (!target){

 target = message.member
//remind 10h 
}
 let content = message.content.slice(12)
setTimeout ( function () {
   
message.channel.send(`${target}${content}`)
}, ms(args[0]));



}

}