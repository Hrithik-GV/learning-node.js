//external module
const express = require("express");
const hostRouter = express.Router();

//local module
const hostController = require('../controllers/hostController');

//get
hostRouter.get("/add-home", hostController.getaddHome);

//post route
hostRouter.post("/add-home", hostController.postaddHome);

//host-home-list
hostRouter.get("/host-home-list", hostController.getHostHome)

//edit-home
hostRouter.get("/edit-home/:homeId", hostController.getEditHome);

hostRouter.post("/edit-home", hostController.postEditHome);

//delete-home
hostRouter.post("/delete-home/:homeId", hostController.postDeleteHome);


//exports
exports.hostRouter = hostRouter;

