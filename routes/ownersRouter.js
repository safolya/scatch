const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");


/*router.get("/", (req, res) => {
  res.send("hey");
});*/
if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      res
        .status(503)
        .send("already one owner having so you dont have permission");
    }
    let {fullname,email,password}=req.body;
    let ownerCreate = await ownerModel.create({
      fullname,
      email,
      password,
    });
  });
}
module.exports = router;
