//core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");


// let registeredHome = [];

module.exports = class Home {
  constructor(houseName, location, price, rating, photo) {
    this.houseName = houseName;
    this.location = location;
    this.price = price;
    this.rating = rating;
    this.photo = photo;
  }

  save() {
    Home.fetchAll((registeredHome) => {
      registeredHome.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHome), (error) => {
        console.log("file writing concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    // return registeredHome;
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      console.log("file read", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
