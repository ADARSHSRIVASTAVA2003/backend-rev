// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connectdb from "./db/index.js";
import express from "express"
const app=express();


dotenv.config({
    path:'./env'
})





connectdb()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is  running  at   port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongo db connected")
})




















// (async()=>{
//     try{
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error",()=>{
//         console.log("Error",error)
//         throw error
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log(`App is listioning on port ${process.env.PORT}`)
//       })
//     }catch(error){
//         console.log("Error"+error)
//         throw error
//     }
// })()