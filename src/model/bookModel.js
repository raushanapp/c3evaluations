/*
likes (integer, minimum default is 0)
coverImage (string, required and it can be 1 only)
content ( string, required)
timestamps (string, required)
*/
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema ({
    like :{type:Number,default:0},
    content :{type:String,required:true},
    coverImages:{type:String,required:true},
},

{ 
    timestamps:true, 
    versionKey:false,
}) ;

module.exports = mongoose.model("bookModel",userSchema);