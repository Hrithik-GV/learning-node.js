const Home = require("../models/homes");

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
  Home.fetchAll((registeredHome) => {
    res.render("store/favourite-list", {
      registeredHome: registeredHome,
      Title: "My favourite",
      currentPage: "favourite",
    });
  });
};
