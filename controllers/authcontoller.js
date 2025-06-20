const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generatetoken}=require("../utils/generatetoken.js");


module.exports.registeruser=async(req, res) => {
  try {
    let { email, password, fullname } = req.body;

    let user=await userModel.findOne({email:email});
    if(user){
        req.flash("error" , "This email is already registered");
      res.redirect("/");
    }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt,async function (err, hash) {
        if(err){
            return (err.message);
        }else{
          let user = await userModel.create({
          email,
          password:hash,
          fullname,
    });
       let token=generatetoken(user);
       res.cookie("token",token);
       res.send("user created successfully");
        }
      });
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports.loginuser=async(req,res)=>{
  let {email,password}=req.body;
  let user=await userModel.findOne({email:email});
  if(!user)req.flash("error" ,"Email or password is incorrect");
       res.redirect('/');

  bcrypt.compare(password, user.password, function(err, result) {
    if(result){
       let token = generatetoken(user);
       res.cookie("token",token);
       res.send("you can login");
    }else{
      req.flash("error" ,"Email or password is incorrect");
       res.redirect('/');
    }
});
}