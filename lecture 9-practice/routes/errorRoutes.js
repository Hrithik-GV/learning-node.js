const express=require("express");
const errorRoutes=express.Router();

//core module
const path=require("path");

//local module
const pathDir=require("../utils/pathUtils");

errorRoutes.use((req,res,next)=>{
    res.status(404).sendFile(path.join(pathDir,"views","404Page.html"))
});

module.exports=errorRoutes;
