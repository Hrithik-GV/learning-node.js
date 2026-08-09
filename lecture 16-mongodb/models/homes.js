//core module
const {getDB} = require("../utils/databaseUtli");

module.exports = class Home {
  constructor(houseName, location, price, rating, photo,description,id) {
    this.houseName = houseName;
    this.location = location;
    this.price = price;
    this.rating = rating;
    this.photo = photo;
    this.description=description;
    this.id=id;
  }

  save() {
    const db=getDB();
    return db.collection("homes").insertOne(this);
  }

  static findBy() {
  }

  static deleteBy() {
  }
};
