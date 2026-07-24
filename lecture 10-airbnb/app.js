//core module
const path=require('path');


//external module
const express=require('express');
const bodyParser=require('body-parser');

//local module
const userRouter=require('./routes/userRouter');
const hostRouter=require('./routes/hostRouter');
const rootDir=require('./utils/pathUtils');


const app=express();



app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
    // res.status(404).send(`<h1> 404 error! your page is not found </h1>`)
    // next()

    res.status(404).sendFile(path.join(rootDir,"views","404-page.html"));

})


const PORT=3002;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})



