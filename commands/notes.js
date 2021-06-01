
const NotesModel = require('./noteschema');
module.exports= {
name:'notes',
decription:'save users notes',

  async execute(client, message, args, Discord){

const content = message.content.slice(6);
const content1 =message.content.slice(13)
    let notesData;
    try {
        notesData = await NotesModel.findOne({ userID: message.author.id });

        if (!notesData) {
           // message.channel.send("your new profile has been created profile is created only once so dont try to use this command again (this is beta command so it is very raw)")
            console.log("created");
            let notes = await NotesModel.create({
                userID: message.author.id,
                Note1:content,
              


            });
            notes.save();
        }
    } catch (err) {
        console.log(err);
    }
    if (args[0]=='show'){

        message.channel.send(notesData.Note1)
     }
const del = notesData.Note1

if(args[0]== 'change'){

    await NotesModel.findOneAndReplace(
{
    userID:message.author.id,
},
{
    userID:message.author.id,   
Note1:content1
}






    )
} 


}


}