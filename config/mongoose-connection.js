const mongoose = require('mongoose');
const config=require("config");
const dbgr=require("debug")("development:mongoose");

main().then(()=>{
    dbgr("connection success");
})
.catch(err => dbgr(err));

async function main() {
  await mongoose.connect(`${config.get("MONGODB_URI")}/scatch`);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};

module.exports=mongoose.connection;