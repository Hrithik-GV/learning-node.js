//core module
const path=require('path');


//external module
const express=require('express');
const userRouter=express.Router();

//local module
const rootDir=require('../utils/pathUtils');


userRouter.get("/",(req,res,next)=>{
// res.send(`
//      <h1>welcome to airbnb<h1>
//     <a href="/host/add-home"> add home</a>
//     `)
// next();

res.sendFile(path.join(rootDir,"views","home.html"))
})

module.exports=userRouter;