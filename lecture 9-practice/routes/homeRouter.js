const express=require('express');
const homeRouter=express.Router();

// core module
const path=require('path');

//localmodule
const pathDir=require('../utils/pathUtils');


homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(pathDir,"views","home.html"));
});

module.exports=homeRouter;
