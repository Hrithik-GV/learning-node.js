const express=require('express');
const userRouter=express.Router();

userRouter.get("/",(req,res,next)=>{
res.send(`
     <h1>welcome to airbnb<h1>
    <a href="/host/add-home"> add home</a>
    `)
next();
})

module.exports=userRouter;