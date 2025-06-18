const express = require("express");
const router = express.Router();
const {registeruser}=require("../controllers/authcontoller");


router.get("/", (req, res) => {
  res.send("hey");
});

router.post("/register", registeruser);
module.exports = router;
