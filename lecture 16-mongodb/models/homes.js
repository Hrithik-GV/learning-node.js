//core module
const { ObjectId } = require("mongodb");
const {getDB} = require("../utils/databaseUtli");

module.exports = class Home {
  constructor(houseName, location, price, rating, photo,description,_id) {
    this.houseName = houseName;
    this.location = location;
    this.price = price;
    this.rating = rating;
    this.photo = photo;
    this.description=description;
    if(_id){
    this._id=_id;
    }
  }

  save() {
    const db=getDB();
    const updateFields = {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating: this.rating,
        photo: this.photo,
        description: this.description
      };
    if(this._id){
     return db.collection("homes").updateOne({_id: new ObjectId(String(this._id))},{$set :updateFields});

    }else{
      return db.collection("homes").insertOne(this);
    }
  }

  static fetchAll(){
    const db=getDB();
    return db.collection('homes').find().toArray();
  } 

  static findBy(homeId) {
    const db=getDB();
    return db.collection('homes').find({_id: new ObjectId(String(homeId))}).next();
  }

  static deleteBy(homeId) {
    const db=getDB();
    return db.collection('homes').deleteOne({_id: new ObjectId(String(homeId))}).next();
  }
};

