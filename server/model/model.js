const mongoose=require("mongoose")

var schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Organ:{
        type:String,
        required:true
    }
    ,
    Type:{
        type:Boolean,
        required:true
    }
})

const Newdata = mongoose.model("newdata",schema)

module.exports=Newdata
