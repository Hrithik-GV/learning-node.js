const Home = require("../models/homes");

exports.getaddHome = (req, res, next) => {
  res.render("host/addHome", { Title: "add-Home page", currentPage: "addHome" });
};

exports.postaddHome = (req, res, next) => {
  console.log(req.body);

  const { houseName, location, price, rating, photo } = req.body;
  const home = new Home(houseName, location, price, rating, photo);
  home.save();
  res.render("host/home-added", { Title: "home-added page" });
};


exports.getHostHome = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render("host/host-home-list", {
      registeredHome: registeredHome,
      Title: "host-home-list",
      currentPage: "host-home",
    });
  });
};

