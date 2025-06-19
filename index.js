const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const path=require("path");
const db=require("./config/mongoose-connection");
const ownersRouter=require("./routes/ownersRouter");
const usersRouter=require("./routes/usersRouter");
const productsRouter=require("./routes/productsRouter");
const expressSession=require("express-session");
const flash=require("connect-flash");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine","ejs");
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET
}));
app.use(flash());
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.listen(8080);