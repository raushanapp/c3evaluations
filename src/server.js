const app = require('./index');

const connect =require("./config/db");

app.listen(5000,async()=>{
 
   try{
       await connect();
       console.log("Listeing on port 5000 ......");
   }catch(err){
       console.log("something went wrong from server----",err)
   }
});