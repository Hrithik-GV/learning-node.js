const Home = require("../models/homes");

exports.getaddHome = (req, res, next) => {
  res.render("host/edit-home", {
    Title: "add-Home page",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing == "true";
  Home.findById(homeId).then((homes) => {
    if (!homes) {
      console.log("home not available");
      return res.redirect("/host/host-home-list");
    } else {
      console.log("homeId:", homeId, "query:", editing);
      res.render("host/edit-home", {
        Title: "edit your home",
        currentPage: "addHome",
        editing: editing,
        home: homes,
      });
    }
  });
};

exports.getHostHome = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("host/host-home-list", {
      registeredHome: registeredHome,
      Title: "host-home-list",
      currentPage: "host-home",
    });
  });
};

exports.postaddHome = (req, res, next) => {
  console.log(req.body);
  const { houseName, location, price, rating, photo, description } = req.body;
  const home = new Home({
    houseName,
    location,
    price,
    rating,
    photo,
    description,
  });
  home.save().then(() => {
    console.log("home saved sucessfully");
  });
  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  console.log(req.body);
  const { id, houseName, location, price, rating, photo, description } = req.body;
  Home.findById(id).then(home=>{
    home.houseName=houseName;
    home.location=location;
    home.price=price;
    home.rating=rating;
    home.photo=photo;
    home.description=description;
    home.save().then(result=>{
      console.log("home updated",result);
    }).catch(err=>{
      console.log("error while updating home",err);
    })
      res.redirect("/host/host-home-list");
  }).catch(err=>{
      console.log("error while finding home",err);
  })
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("deleting home of id", homeId);
  Home.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log(`error while deleteing ${err}`);
    });
};
