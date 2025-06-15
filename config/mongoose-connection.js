const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection success");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/scatch');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};

module.exports=mongoose-mongoose.connection;