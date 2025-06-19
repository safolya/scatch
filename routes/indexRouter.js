const express=require("express");
const app=express();
const router=express.router();
const isloggedin=require("../middlewares/isLoggedin");

router.get("/",(req,res)=>{
    let error=req.flash("error");
    res.render("index",{error});
});

router.get("/shop",isloggedin,(req,res)=>{
    res.render("shop.ejs");
})

module.exports=router;