const mongoose = require('mongoose');


const ownerSchema=new mongoose.Schema({
   fullname:String,
   email:String,
   password:String,
   products:{
    type:Array,
    default:[]
   },
   picture:String,
   gstin:String,
});
const owner=mongoose.model("owner",ownerSchema);
module.exports=owner;