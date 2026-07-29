//external module
const express = require("express");
const hostRouter = express.Router();

//local module
const homesController=require('../controllers/homes')


//get route
hostRouter.get("/add-home",homesController.getaddHome);


//post route
hostRouter.post("/add-home",homesController.postaddHome );

//exports
exports.hostRouter = hostRouter;

