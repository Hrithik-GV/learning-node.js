//core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");
const favourite = require("./favourite");
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
   Home.fetchAll((registeredHome) => {
    if(this.id){ //edit home
      registeredHome=registeredHome.map(home=>
      home.id===this.id?this:home);
    }
    else{ //add home 
      this.id=Math.random().toString();
      registeredHome.push(this);
    }
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

    static deleteBy(HomeId,callback)
    {
      this.fetchAll(homes=>{
        homes=homes.filter(home=>home.id!==HomeId);
        fs.writeFile(homeDataPath, JSON.stringify(homes), err=>{
          favourite.deleteBy(HomeId,callback

            
          )
        });     
      })
    }
};



