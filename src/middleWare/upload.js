const multer = require("multer")();

const storage =multer.diskStorage({ 
    destination: (req,file,callback) => {
        callback(null,path.join(__dirname,"../profileUload"))
    }, 

    filename: (req,file,callback) => {
        callback(null,)
    }

})

const options = { 
    storage,
    fileFilter,
    limit :{
        fileSize :1024*1024*6,
    }
}

const upload = multer(options)

module.exports =upload