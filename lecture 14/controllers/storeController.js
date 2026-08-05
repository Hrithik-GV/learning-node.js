const Home = require("../models/homes");
const favourite = require("../models/favourite");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render("store/index", {
      registeredHome: registeredHome,
      Title: "index",
      currentPage: "index",
    });
  });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
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
  })
};

exports.getFavourite = (req, res, next) => {
  favourite.getFavourite(favourite=>{
    Home.fetchAll((registeredHome) => {
      const favouriteHome=registeredHome.filter(home=>favourite.includes(home.id) );
    res.render("store/favourite-list", {
      favouriteHome: favouriteHome,
      Title: "My favourite",
      currentPage: "favourite",
    });
  });
  })
  
};

exports.postAddToFavourite=(req,res,next)=>{
  favourite.addFavourite(req.body.id,err=>{
    if(err){
      console.log("error :",err);
    }
    else{
      res.redirect("/favourite");
    }
  })
}


exports.getHomeDetails=(req,res,next)=>{
  const homeId=req.params.homeID;
  console.log(homeId)
  Home.findBy(homeId,home=>{
    if(!home){
      console.log("home not available");
      // res.redirect("/home-list");
    }else{
    console.log("home details found ",home);
      res.render("store/home-detail", {
        home:home,
      Title: "Home detail",
      currentPage: "Home detail",
    });
  }
  })
}


