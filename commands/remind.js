const ms = require ('ms');


module.exports={
name:'remind',
description:'remind user according to their commands',

  async execute(message,args){

let target = message.mentions.members.first();
//17
if (!target){
console.log('triggerd')
    target = message.member
   
   
   message.channel.send(`${target} i will remind in ${ms(ms(args[0]))}`);
    let content = message.content.slice(12)
    
    await message.channel.messages.fetch({limit: 1}).then(messages =>{

        message.channel.bulkDelete(messages);
    });
   setTimeout ( function () {
      
   message.channel.send(`${target}${content}`)
   }, ms(args[0]));
   return
   }
message.channel.send(` i will remind in ${ms(ms(args[1]))}`);
 let content = message.content.slice(33);
 await message.channel.messages.fetch({limit: 1}).then(messages =>{

    message.channel.bulkDelete(messages);
});
setTimeout ( function () {
   
message.channel.send(`${target}${content}`)
}, ms(args[1]));


}

}