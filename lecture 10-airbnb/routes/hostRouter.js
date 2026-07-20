const express=require('express');
const hostRouter=express.Router();

hostRouter.get("/host/add-home",(req,res,next)=>{
res.send(`<h1>fill the form to add <h1>
    <form action="/host/add-home" method="POST">
    <input type="text" name="home" placeholder="enter your home here">
    <input type="submit">
    </form>
    `)
next();
})

hostRouter.post("/host/add-home",(req,res,next)=>{
    console.log(req.body);
res.send(`<h1> registered sucessfully <h1>
    <a href="/">go to home</a>
    `)
next();
})

module.exports=hostRouter;