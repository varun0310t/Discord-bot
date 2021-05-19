module.exports ={
name:'delete',
description:'delets chats in bulk ',

 async execute(message,args) {

if(!args[0]) {
return  message.channel.reply('please enter hte amount of chats you want to delete');

}


if(isNaN (args[0])){return message.reply('please use numbers as a amount example (delete 10)')};

if(args[0]> 11){return  message.reply(`you can't delete more than 11 chats at a time`)};

if (args[0]<1){return message.reply(`please don't use negative numbers`)};

await message.channel.messages.fetch({limit: args[0]}).then(messages =>{

    message.channel.bulkDelete(messages);

    message.channel.send(`${args[0]} chats were deleted succesfully`);
});

}




}