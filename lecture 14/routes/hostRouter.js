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

//exports
exports.hostRouter = hostRouter;

