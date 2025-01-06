const express=require("express");
const app=express();
const path=require("path");
const usermodel=require("./model/user")//importing the db

//using middleware to read json based data
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//   
app.use(express.static(path.join(__dirname,"public")))//to use the static files like logo video,css,js in the templates
app.set("view engine","ejs")//to put variables into templates
app.engine("ejs",require("ejs").__express)//if some times gives error that "no module find ejs"
//dynamic routing//
app.get("/",function(req,res){
    res.render("index",{Adim:"Admin"})
    // res.sendFile("routes/home.html",{root:__dirname})
});
app.get("/home",function(req,res){
    res.render("index",{Adim:"Admin"})
    // res.sendFile("routes/home.html",{root:__dirname})
})
app.get("/about",function(req,res){
    res.send("1233")
})
app.get("/services",function(req,res){
    res.render("services")
})
app.get("/login",function(req,res){
    res.render("login")
})
app.get("/contact",function(req,res){
    res.render("contact")
})
// app.post('/create',async(req,res)=>{
// let {email,password}=req.body;
// let createduser=await usermodel.create({
//     email,password
// })
// res.send(createduser)
// })
app.listen(3000)