//core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");
const homeDataPath = path.join(rootDir, "data", "homes.json");

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
   this.id=Math.random().toString();
    Home.fetchAll((registeredHome) => {
      registeredHome.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHome), (error) => {
        console.log("file writing concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    // return registeredHome;
    fs.readFile(homeDataPath, (err, data) => {
      console.log("file read", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findBy(HomeId,callback)
    {
      this.fetchAll(homes=>{
          const homeFound = homes.find(home=>home.id===HomeId)
          callback(homeFound)
      })
    }
};

