//core module
const path=require('path');


//external module
const express=require('express');
const bodyParser=require('body-parser');

//local module
const storeRouter=require('./routes/storeRouter');
const {hostRouter}=require('./routes/hostRouter');
const {authRouter}=require("./routes/authRouter");
const rootDir=require('./utils/pathUtils');
const errorController =require('./controllers/error');
const { default: mongoose } = require('mongoose');


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

app.use((req,res,next)=>{
    
    req.isLoggedIn=req.get('cookie')?req.get('cookie').split('=')[1]==='true':false;
    console.log("cookie middleware",req.isLoggedIn);
    next();
})

app.use(storeRouter);
app.use("/host",(req,res,next)=>{
    if (req.isLoggedIn){
        next();
    }else{
        res.redirect("/login")
    }
});
app.use("/host",hostRouter);
app.use(authRouter);

app.use(errorController.pageNotFound)



//connections
const PORT=3002;
const DB_URL="mongodb+srv://hrithikgv5_db_user:KZF2RWlraBFTTdOd@airbnb.vue5kr9.mongodb.net/airbnb";
mongoose.connect(DB_URL).then(()=>{
    console.log("connecting to mongodb");
    app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
    })
}).catch((err)=>{
    console.log("error while connecting to mongodb",err);
})





















