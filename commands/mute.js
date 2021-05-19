const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'mute the person',

    execute(message, args) {

        const target = message.mentions.users.first();

        if (target) {
            
          
            let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');

            //let membertarget = message.guild.memebers.cache.get(target.id);

            let membertarget = message.guild.members.cache.get(target.id);


            if (membertarget.roles.cache.has('747854497346355303')) {
                message.reply(`mod can't be muted`);
                return

            }

            if (!args[1]) {
                membertarget.roles.add(muterole.id);

                message.channel.send(`succesfully muted ${target}`);
                return
                // `succesfully muted ${target}`
            }
            membertarget.roles.add(muterole.id);

            message.channel.send(`${target} has been muted for${ms(ms(args[1]))}`);


            setTimeout(function () {
                membertarget.roles.remove(muterole.id);
                message.channel.send(`${target} has been unmuted`);

            }, ms(args[1]));


        }
        else {

          message.channel.send(`we cound't find the person you mention   `);



        }









    }


}