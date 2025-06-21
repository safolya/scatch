const express = require("express");
const router = express.Router();
const productModel = require("../models/products-model")

router.post("/create", async (req, res) => {
    
 let  {name,price,discount,bgcolor,panelcolor,textcolor,}=req.body;
    let product = await productModel.create({
        image: req.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor,
    });
});
module.exports = router;