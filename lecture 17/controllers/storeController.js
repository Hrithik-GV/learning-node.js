const Home = require("../models/homes");
const favourite = require("../models/favourite");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("store/index", {
      registeredHome: registeredHome,
      Title: "index",
      currentPage: "index",
    });
  });
};

exports.getHome = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("store/home-list", {
      registeredHome: registeredHome,
      Title: "Home Page",
      currentPage: "Home",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    Title: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavourite = (req, res, next) => {
  favourite.getFavourite().then(favourite => {
    favourite=favourite.map(fav=>fav.homeId)
    Home.find().then(registeredHome => {
      const favouriteHome = registeredHome.filter((home) =>
        favourite.includes(home._id.toString())
      );
      res.render("store/favourite-list", {
        favouriteHome: favouriteHome,
        Title: "My favourite",
        currentPage: "favourite",
      });
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
   const homeId=req.body.id;
  const fav=new favourite(homeId);
 fav.save().then((result)=>{
  console.log('favourite added:',result);
 }).catch((err)=>{
    console.log("error while deleting:", err);
 }).finally(()=>{
    res.redirect("/favourite");
 })
};


exports.postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  favourite.deleteBy(homeId).then((result)=>{
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
      });
    }
  });
};