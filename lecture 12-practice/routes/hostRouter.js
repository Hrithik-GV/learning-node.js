//core module
const path = require("path");

//external module
const express = require("express");
const hostRouter = express.Router();

//local module
const rootDir = require("../utils/pathUtils");





hostRouter.get("/add-home", (req, res, next) => {
  // res.sendFile(path.join(rootDir,"views","addHome.html"));
  res.render("addHome", { Title: "add-Home page",currentPage:'addHome' });
});

const registeredHome = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  registeredHome.push(req.body);

  // res.sendFile(path.join(rootDir,"views","home-added.html"));
  res.render("home-added", { Title: "home-added page",currentPage:'home-added' });
});

exports.hostRouter = hostRouter;
exports.registeredHome = registeredHome;
