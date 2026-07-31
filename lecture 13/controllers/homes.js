const Home = require("../models/homes");

exports.getaddHome = (req, res, next) => {
  res.render("addHome", { Title: "add-Home page", currentPage: "addHome" });
};

exports.postaddHome = (req, res, next) => {
  console.log(req.body);

  const { houseName, location, price, rating, photo } = req.body;
  const home = new Home(houseName, location, price, rating, photo);
  home.save();
  res.render("home-added", { Title: "home-added page" });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render("home", {
      registeredHome: registeredHome,
      Title: "Home Page",
      currentPage: "Home",
    });
  });
};
