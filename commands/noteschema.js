const mongoose = require ('mongoose');

const noteSchema = new mongoose.Schema({
 Note1:{type:String},
 Note2:{type:String},
 Note3:{type:String},
 Note4:{type:String},
 note5:{type:String}, 
 userID:{type:String,require:true,unique :true},  
})

const model = mongoose.model('NotesModel',noteSchema);

module.exports = model;