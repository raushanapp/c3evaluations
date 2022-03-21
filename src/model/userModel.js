/*firstName (string, required, minimum length 3 and maximum length 30)
lastName (string, optional, if given then minimum length 3 and maximum length 30)
age (integer, required, should be between 1 and 150)
email (string, required, unique)
profileImages: (array of imageUrls and atleast 1 profile image is required)
timestamps (string, required)
*/

const mongoose = require("mongoose");

const userSchema = mongoose.Schema ({
    firstNmae :{type:String,required:true},
    lastNmae :{type:String,required:true},
    age :{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    profileImages:[{type:String,required:true}],
},

{ 
    timestamps:true, 
    versionKey:false,
}) ;

module.exports = mongoose.model("user",userSchema);