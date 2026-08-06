const Home = require("../models/homes");


exports.getaddHome = (req, res, next) => {
  res.render("host/edit-home", { Title: "add-Home page", currentPage: "addHome", editing: false });
};



exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing == "true";
  Home.findBy(homeId, home => {
    if (!home) {
      console.log("homw not available");
      return res.redirect("/host/host-home-list")
    }
    else {
      console.log('homeId:', homeId, 'query:', editing);
      res.render("host/edit-home", { Title: "edit your home", currentPage: "addHome", editing: editing,home:home });
    }
  })
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


exports.postaddHome = (req, res, next) => {
  console.log(req.body);
  const { houseName, location, price, rating, photo } = req.body;
  const home = new Home(houseName, location, price, rating, photo);
  home.save();
  res.render("host/home-added", { Title: "home-added page" });
};


