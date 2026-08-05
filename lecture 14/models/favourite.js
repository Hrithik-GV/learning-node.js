const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class favourite {
  static addFavourite(homeId, callback) {
    favourite.getFavourite((favourite) => {
      if (favourite.includes(homeId)) {
        callback("home exist in favourite list");
      } else {
        favourite.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourite), callback);
      }
    });
  }

  static getFavourite(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      if (err || !data.length) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }
};
