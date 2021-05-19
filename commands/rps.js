const { error } = require('console');
const fs = require('fs');
module.exports ={
name:'rps',
description:'game',

execute(message,args){

if(!args[0]){
message.channel.send('please select rock paper scissors for example type $example rps');

}

let userSelection = args[0]

let lose = 0

 let wins = 0

 let ties = 0
let rps =["rock", "paper", "scissors"]
 

let botSelection = rps[Math.floor(Math.random()*rps.length)];


if(botSelection===userSelection){

    message.reply(`It's a tie we both selected ${userSelection}`)
++ties
}


switch(userSelection){
case 'rock':{
if(botSelection==='paper'){
    message.reply(`I won i selected ${botSelection}`);
    
    fs.writeFileSync('data1.js',' +1',{flag:"a+"})
}
if(botSelection==='scissors'){

    message.reply(`You won i selected ${botSelection}`);
    
    fs.writeFileSync('data1.js',' -1',{flag:"a+"})
}


}}
switch (userSelection){
case 'paper':{

    if(botSelection==='rock'){
        message.reply(`You won  i selected ${botSelection}`);
        
        fs.writeFileSync('data1.js',' -1',{flag:"a+"})
    }

    if(botSelection==='scissors'){
        message.reply(`I won i selected ${botSelection}`);
        
        fs.writeFileSync('data1.js',' +1',{flag:"a+"})
    }

}}

switch(userSelection){
case 'scissors':{

if(botSelection==='rock'){

    message.reply(`I won i selected ${botSelection}`);
    
    fs.writeFileSync('data1.js',' +1',{flag:"a+"})

}

if(botSelection==='paper'){
    message.reply(`You won i selected ${botSelection}`);

    
fs.writeFileSync('data1.js',' -1',function (err){if(err)console.log (err)},{flag:"a+"})

}





}

}


console.log(wins,lose,ties);
}

}





















