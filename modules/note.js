const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        require:true,
    },
    book:{
        type:String,
        require:true
    },
    isfav:{
        type:Boolean,
        default:false
    },
    Date:{
        type:String,
        default:new Date
    }
})


const note = mongoose.model("note",noteSchema)
module.exports=note