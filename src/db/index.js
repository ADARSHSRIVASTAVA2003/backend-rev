import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"


const connectdb =async()=>{
    try{
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`mongo db connected ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGO DB  connection error",error)
        process.exit(1)
    }
}



export default connectdb