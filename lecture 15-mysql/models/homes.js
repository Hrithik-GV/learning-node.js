//core module
const db = require("../utils/databaseUtli");

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
    if(this.id){ //edit the existing home
      return db.execute('UPDATE homes SET houseName=?, location=?, price=?, rating=?, photo=?,description=? WHERE id=?',
      [this.houseName,this.location,this.price,this.rating,this.photo,this.description,this.id]
      );

  }else{ // add new home
      return db.execute('INSERT INTO homes(houseName, location, price, rating, photo,description) VALUES (?,?,?,?,?,?)',
      [this.houseName,this.location,this.price,this.rating,this.photo,this.description]
      );
  }
  }

  static fetchAll() {
      return db.execute("SELECT * FROM homes")
  }

  static findBy(HomeId) {
    return db.execute('SELECT * FROM homes where id=?',[HomeId])
  }

  static deleteBy(HomeId) {
    return db.execute('DELETE FROM homes where id=?',[HomeId])
  }
};
