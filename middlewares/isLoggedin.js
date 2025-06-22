const jwt=require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports=async(req,res,next)=>{
    if(!req.cookies.token){
        req.flash("error","you need to login first");
        return res.redirect("/");
    }else{
        try{
           let decoded=jwt.verify(req.cookies.token, process.env.JWT_KEY);
           let user=await userModel.findOne({email:decoded.email}).select("-password");
           req.user=user;
           next();
        }catch(err){
            //req.flash("error","somthimg went wrong");
            console.log(err);
            res.redirect("/");
        }
    }
}