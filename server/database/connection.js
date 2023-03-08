const { config } = require("dotenv")
const mongoose=require("mongoose")

const connectDB=async()=>
{
    try
    {
        mongoose.set('strictQuery', true)
        const con=await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongoose connected")
    }
    catch(err)
    {
        console.log("Error in connection", err)
        process.exit(1)
    }
}

module.exports=connectDB
