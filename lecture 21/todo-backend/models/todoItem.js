const { Timestamp } = require('mongodb');
const mongoose=require('mongoose');

const todoItemSchema= new mongoose({

    task:{
        type:String,
        required:true
    },

    date:Date,

    completed:{
        type:Boolean,
        default:false
    },
    timestamps:true
})

module.exports=mongoose.model('todoItem',todoItemSchema)