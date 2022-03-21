const express = require("express");;

const {body,validationResult} =require("express-validator");

const upload =require("../middleWare/upload")

const router = express.Router();

const User = require("../model/userModel");

router.post("", async(req,res)=>{

    body("fisrtNme")
    .not()
    .isEmpty()
    .isLength({min:3,max:30})
    .withMessage("Please check your name again"),
    body("lastNmae")
    .not()
    .isEmpty()
    .isLength({min:3,max:30})
    .withMessage("Please check your name again"),
    body("email")
    
    
    try{
        const errors = validationResult

        if (!errors){
            throw new Error({message:errors.message})
        }
        const user = await User.create(req.body)

    }
    catch(err){
        return res.status(500).send({message: err.message});
    }


});

module.exports =router;