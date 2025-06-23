const express=require("express");
const app=express();
const router=express.Router();
const isloggedin=require("../middlewares/isLoggedin");
const productModel=require("../models/products-model");
const isLoggedin = require("../middlewares/isLoggedin");
const userModel=require("../models/user-model")

router.get("/",(req,res)=>{
    let error=req.flash("error");
    res.render("index",{error,loggedin:false});
});


router.get("/shop",isloggedin,async(req,res)=>{
    let products=await productModel.find();
    let success=req.flash("success");
    res.render("shop.ejs",{products,success});
});

router.get("/cart",isloggedin,async(req,res)=>{
    let user=await userModel.findOne({email: req.user.email}).populate("cart");
    res.render("cart.ejs",{user});
});

router.get("/addtocart/:id",isloggedin,async(req,res)=>{
    let user=await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success","Added to Cart");
    res.redirect("/shop");
});

module.exports=router;