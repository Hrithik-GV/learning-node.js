const Home = require("../models/homes");


exports.getaddHome = (req, res, next) => {
  res.render("host/edit-home", { Title: "add-Home page", currentPage: "addHome", editing: false });
};



exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing == "true";
  Home.findBy(homeId).then(([homes]) => {
    const home=homes[0]
    if (!home) {
      console.log("home not available");
      return res.redirect("/host/host-home-list")
    }
    else {
      console.log('homeId:', homeId, 'query:', editing);
      res.render("host/edit-home", { Title: "edit your home", currentPage: "addHome", editing: editing,home:home });
    }
  })
};


exports.getHostHome = (req, res, next) => {
  Home.fetchAll().then(([registeredHome]) => {
    res.render("host/host-home-list", {
      registeredHome: registeredHome,
      Title: "host-home-list",
      currentPage: "host-home",
    });
  });
};


exports.postaddHome = (req, res, next) => {
  console.log(req.body);
  const { houseName, location, price, rating, photo,description } = req.body;
  const home = new Home(houseName, location, price, rating, photo,description);
  home.save().then(()=>{
    console.log("home saved sucessfully");
  });
  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  console.log(req.body);
  const {id, houseName, location, price, rating, photo,description } = req.body;
  const home = new Home(houseName, location, price, rating, photo,description,id);
  home.save();
  res.redirect("/host/host-home-list");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('deleting home of id',homeId);
  Home.deleteBy(homeId).then(()=>{
    res.redirect("/host/host-home-list");
  }).catch(err=>{
          console.log(`error while deleteing ${err}`);
  })
};
