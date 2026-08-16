const mongoose=require('mongoose');
const favourite = require('./favourite');

const homeSchema =mongoose.Schema({
  houseName:{type:String,required:true},
  price:{type:Number,required:true},
  location:{type:String,required:true},
  rating:{type:String,required:true},
  photo:String,
  description:String
})

homeSchema.pre('findOneAndDelete', async function(){
  const homeId=this.getQuery()._id;
  await favourite.deleteMany({homeId:homeId});
})


module.exports=mongoose.model('home', homeSchema);
