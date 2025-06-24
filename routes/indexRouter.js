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
    user.cart.forEach(product => {
        let bill=(Number(product.price)+20)-Number(product.discount);
    });
    let success=req.flash("success");
    res.render("cart.ejs",{user,success});
});

router.get("/addtocart/:id",isloggedin,async(req,res)=>{
    let user=await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success","Added to Cart");
    res.redirect("/shop");
});
 //user.cart = user.cart.filter(productId => productId.toString() !== productIdToDelete.toString());
router.get("/delete/:id",isloggedin,async(req,res)=>{
    let user=await userModel.findOne({email: req.user.email});
    productIdToDelete=req.params.id
     user.cart = user.cart.filter(item => item.$oid !== productIdToDelete);
    await user.save();
    req.flash("success","Removed Succesfully");
    res.redirect("/cart");
});

module.exports=router;