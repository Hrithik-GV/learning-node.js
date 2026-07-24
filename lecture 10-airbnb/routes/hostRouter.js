//core module
const path=require('path');

//external module
const express=require('express');
const hostRouter=express.Router();

//local module
const rootDir=require('../utils/pathUtils')

hostRouter.get("/add-home",(req,res,next)=>{
// res.send(`<h1>fill the form to add <h1>
//     <form action="/host/add-home" method="POST">
//     <input type="text" name="home" placeholder="enter your home here">
//     <input type="submit">
//     </form>
//     `)
// next();

res.sendFile(path.join(rootDir,"views","addHome.html"));
})

hostRouter.post("/add-home",(req,res,next)=>{
    console.log(req.body);
// res.send(`<h1> registered sucessfully <h1>
//     <a href="/">go to home</a>
//     `)
// next();

res.sendFile(path.join(rootDir,"views","home-added.html"));


})

module.exports=hostRouter;

