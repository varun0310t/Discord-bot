const Discord = require('discord.js');


const client = new Discord.Client({ disableEveryone: false });


let Prefix = '#';

const fs = require('fs');


const mcounter = require('./commands/counter/mcounter');



client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


for (const file of commandfiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
};


client.on('ready', () => {
    console.log("i am online okokoko ");
    mcounter(client);
    //const mod = '747854497346355303';
    client.user.setActivity('with your privacy', { type: 'PLAYING' });
    //   const weeb = '748147625114599457';

});




client.on('message', function (message) {
const prefix = '!';
    if (message.author.bot || message.content.startsWith(Prefix)) return;
    const commandBody = message.content.slice(Prefix.length);

    // const incommand = message.content.tolowerCase();
    //slice cut the content in the given order 

    const args = commandBody.split(' ');

    //spilt gives a , between every element

    const command = args.shift().toLowerCase();

    // shift command willjust print first element

    //tolowerchase cammand will make all the words small

    // console.log(command);

    //  {||} means or
    const icmd2 = message.content;

    const icmd = icmd2.toLowerCase();
    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);

    }

    if (icmd === "varun") {

        message.reply('??');
    }

    if (icmd === "balun") {
        console.log(message.channel);
        message.reply('please use command with prefix');
    }

    if (icmd === "noice") {

        message.channel.send('Noice Noice');
    }

    if (command === "giveweeb" && message.member.roles.cache.has('748147625114599457')) {

        //console.log( message.member);

        message.reply("you are already weeb ");
    }
    else if (command === "giveweeb") {

        client.commands.get('giveweeb').execute(message, args);

        message.reply('done');

    }

    if (command === 'mute') {

        client.commands.get('mute').execute(message, args);

   }

    if (command === 'unmute') {

        client.commands.get('unmute').execute(message, args);

    }

    if (command === 'delete') {

        client.commands.get('delete').execute(message, args);

    }
    //719562003802488876

    if (command === 'commands') {


        client.commands.get('commands').execute(message, args, Discord);
    }

    if (icmd === 'to all' && message.member.roles.cache.has('747854497346355303')) {

        message.channel.send('@everyone');

        console.log(message.member + ' pinged everyone ');

    }
    else if (icmd === 'to all') {

        message.channel.send(' only mods can use this commands');
    }

    if (icmd === 'to mods') {

        message.channel.send('<@&747854497346355303>');
        console.log(message.member + ' pinged mods ');
    }


    if (command === 'ava') {

        client.commands.get('avatar').execute(message, args, Discord);

    }


    if (command === 'random') {

        client.commands.get('random').execute(message, args);

    }

    if (command === 'rps') {


        client.commands.get('rps').execute(message, args);
    }

   
if(command=== 'report'){

    client.commands.get('report').execute(client,message,args,Discord);
  }

if (command==="remind"){

    client.commands.get('remind').execute(message,args);
}


    
}



)






client.login('ODM3MjQ1MjYzMTY4MDEyMjk5.YIpvag.7HWILMTTSSAJljk4ovZC6gUluPI');
