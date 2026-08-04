//external module
const express = require("express");
const hostRouter = express.Router();

//local module
const hostController=require('../controllers/hostController')


//get route
hostRouter.get("/add-home",hostController.getaddHome);


//post route
hostRouter.post("/add-home",hostController.postaddHome );

//host-home-list
hostRouter.get("/host-home-list",hostController.getHostHome)

//exports
exports.hostRouter = hostRouter;

