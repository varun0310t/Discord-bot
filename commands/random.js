
module.exports = {
    name: "random",
    description: "A game of Rock, Paper, Scissors!",
    execute(message, args) {

        if (!args[0]) {
            console.log(args[0]);
            message.channel.send('please select a minimum number example (random 40 50) here minimum number is 40 ');
            return
        }

        if (!args[1]) {


            message.channel.send('please select a minimum number example (random 40 50) here maximum 50 ');
            console.log(args[1]);
            return
        }
        if (args[0]==Number ) {

            message.channel.send('please use  numbers');
            return
        }
        if (args[1] == Number ) {

            message.channel.send('please use  numbers');
            return
        }
        console.log(args[0]);
        const random1 = Math.ceil(args[0]);
        console.log(args[1]);
        const random2 = Math.ceil(args[1]);

        const random = Math.floor(Math.random() * (random2 - random1 + 1)) + random1
        if (!args[0]===Number ) {

            message.channel.send('please use  numbers');
            return
        }
        if (random == 'NaN ') {

            message.channel.send('please use  numbers');
            return
        }
        
        message.channel.send(` your random number is ${random}`);

    }
}