const { error } = require('console');
const fs = require('fs');
module.exports ={
name:'rps',
description:'game',

execute(message,args){
let userSelection = args[0].toLowerCase()
if(!args[0]){
message.channel.send('please select rock paper scissors for example type $example rps');

} 
if (userSelection!=='rock' &&  userSelection !== 'paper' && userSelection !== ' scissors') {
    message.reply('please select valid move ')
   
}
//let userSelection = args[0].toLowerCase();



 

 
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
    
    
}
if(botSelection==='scissors'){

    message.reply(`You won i selected ${botSelection}`);
    
    
}


}}
switch (userSelection){
case 'paper':{

    if(botSelection==='rock'){
        message.reply(`You won  i selected ${botSelection}`);
        
        
    }

    if(botSelection==='scissors'){
        message.reply(`I won i selected ${botSelection}`);
        
        
    }

}}

switch(userSelection){
case 'scissors':{

if(botSelection==='rock'){

    message.reply(`I won i selected ${botSelection}`);
    
    

}

if(botSelection==='paper'){
    message.reply(`You won i selected ${botSelection}`);

    


}





}

}



}

}





















