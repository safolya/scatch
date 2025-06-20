const express = require("express");
const router = express.Router();
const {registeruser,loginuser}=require("../controllers/authcontoller");


/*router.get("/", (req, res) => {
  res.send("hey");
});*/

router.post("/register", registeruser);

router.post("/login",loginuser);

module.exports = router;
