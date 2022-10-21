const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    color:{
        type:Number,
        require:true,
    },
    Date:{
        type:String,
        default:new Date
    },
    owner:{
        type:String,
        require:true
    },
    notes:{
        type:[String],
        default:false,
    },
    isfav:{
        type:Boolean,
        default:false
    }
})


const book = mongoose.model("book",bookSchema)
module.exports=book