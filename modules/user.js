const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    url:{
        type:String,
        default:"https://th.bing.com/th/id/OIP.VORoQXOzfnrc1yOV4anzxQHaHa?pid=ImgDet&rs=1"
    },
    Date:{
        type:String,
        default:new Date
    }
})


const user = mongoose.model("user",userSchema)
module.exports=user