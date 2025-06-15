const mongoose = require('mongoose');

const ownerSchema=new mongoose.Schema({
   fullName: String,
   email:String,
   password:String,
   products:{
    type:Array,
    default:[]
   },
   contact:String,
   picture:String,
});
const owner=mongoose.model("owner",ownerSchema);
module.exports=owner;