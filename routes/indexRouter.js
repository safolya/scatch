const express=require("express");
const app=express();
const router=express.router();

router.get("/",(req,res)=>{
    res.render("index");
});

module.exports=router;