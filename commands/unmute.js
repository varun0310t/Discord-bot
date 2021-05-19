module.exports= {
    name:'unmute',
   description:'unmute the person',
   
   execute(message, args){
   
   const target = message.mentions.users.first();
   
   if(target){
   
   let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
   
   //let membertarget = message.guild.memebers.cache.get(target.id);
   
   let membertarget = message.guild.members.cache.get(target.id);
   
   
     membertarget.roles.remove(muterole.id);
   
   message.channel.send(`succesfully unmuted ${target}`);
   }
   else{
   
   message.channel.send(`we cound't find the person you mention   `);
   
   
   
   }}}