const path=require('path')
const rootDir=require('../utils/pathUtils')
const Home = require("../models/homes");
const User=require('../models/user')

exports.getIndex = (req, res, next) => {
  console.log("session value", req.session);
  Home.find().then((registeredHome) => {
    res.render("store/index", {
      registeredHome: registeredHome,
      Title: "index",
      currentPage: "index",
      isLoggedIn: req.session.isLoggedIn,
      user:req.session.user
    });
  });
};

exports.getHome = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("store/home-list", {
      registeredHome: registeredHome,
      Title: "Home Page",
      currentPage: "Home",
      isLoggedIn: req.session.isLoggedIn,
      user:req.session.user
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    Title: "My Bookings",
    currentPage: "bookings",
    isLoggedIn: req.session.isLoggedIn,
    user:req.session.user
  });
};

exports.getFavourite = async (req, res, next) => {
  const userId=req.session.user._id;
  const user= await User.findById(userId).populate('favourite')
      res.render("store/favourite-list", {
        favouriteHome: user.favourite,
        Title: "My favourite",
        currentPage: "favourite",
        isLoggedIn: req.session.isLoggedIn,
        user:req.session.user
      });
  };

exports.postAddToFavourite = async (req, res, next) => {
  const homeId = req.body.id;
  const userId=req.session.user._id;
  const user=await User.findById(userId);
  if(!user.favourite.includes(homeId)){
    user.favourite.push(homeId)
    await user.save();
  }
      res.redirect("/favourite");
}


exports.postDeleteFavourite = async (req, res, next) => {
  const homeId = req.params.homeId;
  const userId=req.session.user._id;
  const user=await User.findById(userId);
    if(user.favourite.includes(homeId)){
      user.favourite=user.favourite.filter(fav=>fav.toString()!==homeId)
      await user.save();
    }
      res.redirect("/favourite");
  }

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeID;
  console.log(homeId);
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home not available");
      // res.redirect("/home-list");
    } else {
      console.log("home details found ", home);
      res.render("store/home-detail", {
        home: home,
        Title: "Home detail",
        currentPage: "Home detail",
        isLoggedIn: req.session.isLoggedIn,
        user:req.session.user
      });
    }
  });
};

exports.getHouseRules=(req,res,next)=>{
   if(!req.session.isLoggedIn){
    return res.redirect("/login");
  }
  
  const homeId=req.params.homeID;

  const rulesFileName='House Rules.pdf';
  const filePath=path.join(rootDir,'rules',rulesFileName);
  res.download(filePath,'rules');
}

