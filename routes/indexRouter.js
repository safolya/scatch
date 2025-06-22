const express=require("express");
const app=express();
const router=express.Router();
const isloggedin=require("../middlewares/isLoggedin");
const productModel=require("../models/products-model");

router.get("/",(req,res)=>{
    let error=req.flash("error");
    res.render("index",{error});
});

router.get("/shop",isloggedin,async(req,res)=>{
    let products=await productModel.find();
    res.render("shop.ejs",{products});
})

module.exports=router;