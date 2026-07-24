//extrenal module
const express=require('express');
const contactRouter=express.Router();

//core module
const path=require("path");

//local module
const pathDir=require("../utils/pathUtils");

contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(pathDir,"views","contact.html"));        
});

contactRouter.use(express.urlencoded());
contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(pathDir,"views","response.html"));
});

module.exports=contactRouter;
