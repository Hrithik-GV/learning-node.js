//core module
const path=require('path');


//external module
const express=require('express');
const bodyParser=require('body-parser');

//local module
const storeRouter=require('./routes/storeRouter');
const {hostRouter}=require('./routes/hostRouter');
const rootDir=require('./utils/pathUtils');
const errorController =require('./controllers/error');
const {mongoConnect} = require('./utils/databaseUtli');


const app=express();

// ejs setup
app.set('view engine','ejs');
app.set('views','views');



app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use(express.static(path.join(rootDir,"public")));

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host",hostRouter);

app.use(errorController.pageNotFound)


const PORT=3001;
mongoConnect(()=>{
    app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
    })
})




















