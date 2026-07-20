const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use(express.urlencoded());


app.get("/",(req,res,next)=>{
res.send(`
     <h1>welcome to airbnb<h1>
    <a href="/add-home"> add home</a>
    `)
next();
})

app.get("/add-home",(req,res,next)=>{
res.send(`<h1>fill the form to add <h1>
    <form action="/add-home" method="POST">
    <input type="text" name="home" placeholder="enter your home here">
    <input type="submit">
    </form>
    `)
next();
})
app.post("/add-home",(req,res,next)=>{
    console.log(req.body);
res.send(`<h1> registered sucessfully <h1>
    <a href="/">go to home</a>
    `)

})

const PORT=3002;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})



