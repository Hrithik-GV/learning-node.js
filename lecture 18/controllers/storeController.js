const Home = require("../models/homes");
const favourite = require("../models/favourite");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("store/index", {
      registeredHome: registeredHome,
      Title: "index",
      currentPage: "index",
      isLoggedIn:req.isLoggedIn
    });
  });
};

exports.getHome = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("store/home-list", {
      registeredHome: registeredHome,
      Title: "Home Page",
      currentPage: "Home",
      isLoggedIn:req.isLoggedIn
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    Title: "My Bookings",
    currentPage: "bookings",
    isLoggedIn:req.isLoggedIn
  });
};

exports.getFavourite = (req, res, next) => {
  favourite.find()
  .populate('homeId')
  .then(favourite => {
    const favouriteHome=favourite.map(fav=>fav.homeId)
      res.render("store/favourite-list", {
        favouriteHome: favouriteHome,
        Title: "My favourite",
        currentPage: "favourite",
        isLoggedIn:req.isLoggedIn
      });
  
  });
};

exports.postAddToFavourite = (req, res, next) => {
   const homeId=req.body.id;
  favourite.findOne({homeId:homeId}).then(fav=>{
    if(fav){
      console.log("already marked as favourite",fav);
    }else{
      fav=new favourite({homeId:homeId});
      fav.save().then((result)=>{
        console.log("favourite added",result);
      })
          res.redirect("/favourite");
    }
  }).catch(err=>{
    console.log("error while adding favourite",err);
  })
};


exports.postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  favourite.findOneAndDelete({homeId:homeId}).then((result)=>{
  console.log('favourite deleted:',result);
 }).catch((err)=>{
    console.log("error :", err);
 }).finally(()=>{
    res.redirect("/favourite");
 })
};


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
        isLoggedIn:req.isLoggedIn
      });
    }
  });
};