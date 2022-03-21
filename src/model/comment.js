


const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema ({
    body:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"},
    bookId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"bookModel"},
},

{ 
    timestamps:true, 
    versionKey:false,
}) ;

module.exports =mongoose.model("publication",publicationSchema);