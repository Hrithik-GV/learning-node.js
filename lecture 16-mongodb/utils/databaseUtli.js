const mongo=require('mongodb');

const MongoClient=mongo.MongoClient;

const MONGO_URL="mongodb+srv://hrithikgv5_db_user:KZF2RWlraBFTTdOd@airbnb.vue5kr9.mongodb.net";

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(MONGO_URL)
    .then(client=>{
        _db=client.db('airbnb');
        callback();
    })
    .catch(err=>{
        console.log("error while connecting to mongodb:",err);
    })
}

const getDB=()=>{
    if(!_db){
        throw new Error('Mongo not connected');
        
    }
    return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDB=getDB;