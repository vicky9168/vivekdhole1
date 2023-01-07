const express=require("express");
const bodyParser=require("body-parser");
const mongoose = require("mongoose");
const ejs=require("ejs");
const port=process.env.PORT || 8000;

const app=express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-vicky:Test-123@cluster0.a9gxe.mongodb.net/useDB");

const useSchema = {
    name:String,
    email:String,
    message:String
};
const Use = mongoose.model("Use",useSchema); 

app.get("/",function(req,res){
    res.render("index");
});

app.post("/",function(req,res){
 const useUser= new Use({
     name:req.body.name,
     email:req.body.email,
     message:req.body.texta
 });
 useUser.save(function(err){
     if(err){
         console.log(err);
     } else{
         res.render("home");
     }
     
 });
});
app.get("/reload",function(req,res){
    res.redirect("/");
})

app.listen(port,function(req,res){
    console.log(`Server has started successfully ${port}`);
});
