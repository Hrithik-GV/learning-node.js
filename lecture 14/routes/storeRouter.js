//external module
const express=require('express');
const storeRouter=express.Router();

//local module
const storeController=require('../controllers/storeController')

//home-list
storeRouter.get("/",storeController.getIndex)

storeRouter.get("/home-list",storeController.getHome)


//bookings
storeRouter.get("/bookings",storeController.getBookings)

//favourite
storeRouter.get("/favourite",storeController.getFavourite)

//home-detail
storeRouter.get("/homes/:homeID",storeController.getHomeDetails)

//favourite
storeRouter.post("/favourite",storeController.postAddToFavourite);

//exports
module.exports=storeRouter;
