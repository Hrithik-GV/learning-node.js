//core module
const path=require('path');


//external module
const express=require('express');
const userRouter=express.Router();

//local module
const rootDir=require('../utils/pathUtils');
const { registeredHome } = require('./hostRouter');


userRouter.get("/",(req,res,next)=>{

console.log(registeredHome);
// res.sendFile(path.join(rootDir,"views","home.html"))
res.render('home',{registeredHome :registeredHome,Title:'Home Page',currentPage:'Home'});
})

module.exports=userRouter;
