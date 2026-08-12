const mongoose=require('mongoose');
const homes = require('./homes');

const favouriteSchema=mongoose.Schema({
  homeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'home',
    required:true,
    unique:true
  }
})



module.exports=mongoose.model('favourite',favouriteSchema);


