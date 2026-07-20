const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');

const app=express();

// app.use((req,res,next)=>{
//     console.log(`first middleware`,req.url,req.method);
//     next();
// })
// app.use((req,res,next)=>{
//     console.log(`second middleware`,req.url,req.method);
//     next();
// })
// app.use((req,res,next)=>{
//     console.log(`third middleware`,req.url,req.method);
//     res.send(`<h2>third middleware in practice set</h2>`);
//     next();
// })
app.get("/",(req,res,next)=>{
    console.log(`home middleware`,req.url,req.method);
    res.send(`<h2>home page<h2>`);
})



app.get("/contact-us",(req,res,next)=>{
    console.log(`contact us middleware`,req.url,req.method);
    res.send(`
        <h2>fill the form to contact us<h2>
        <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="enter your name" >
        <input type="email" name="email" placeholder="enter your email address">
        <input type="submit" value="submit">
        </form>
        `);
})
app.use(bodyParser.urlencoded());
app.post("/contact-us",(req,res,next)=>{
     console.log(`contact us POST  middleware`,req.url,req.method,req.body);
     res.send(`<h2>we will contact you soon...<h2>`)
})

const PORT=5001;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})

