import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const mongooseURL= process.env.URL
const connectDB= async()=>{
    try{
        const connection = await mongoose.connect(mongooseURL)
        console.log("connected to the mongodb");
        return connection
    }catch(error){
        console.error(error)
    }
}

export default connectDB