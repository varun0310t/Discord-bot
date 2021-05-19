const { Client, } = require("discord.js");

module.exports = async (Client) => {

    const guild = Client.guilds.cache.get('719562003802488873');
    //const chat = guild.channels.cache.get('719562003802488876');

    setInterval(() => {
        const mcounter = guild.memberCount;
        const channel = guild.channels.cache.get('841268534898065458');
        channel.setName(`total members ${mcounter}`);
        //Client.channels.cache.get('719562003802488876').send('member count has been updated');

 
    }, 1000000);



 
    










}




