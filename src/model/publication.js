/*
name ( references post collection)
timestamps (string, required)
*/


const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema ({

    name:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"},
},

{ 
    timestamps:true, 
    versionKey:false,
}) ;

module.exports =mongoose.model("publication",publicationSchema);