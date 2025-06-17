const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
   fullname: String,
   email:String,
   password:String,
   cart:{
    type:Array,
    default:[]
   },
   orders:{
    type:Array,
    default:[]
   },
   contact:String,
   picture:String,
});
const user=mongoose.model("user",userSchema);
module.exports=user;