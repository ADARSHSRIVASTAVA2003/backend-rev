import mongoose ,{Schema} from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema=new  Schema({
    video:{
         type: String,  //cloundary link
         required:true
    },
    thumbnail:{
       type: String,
       required:true
    },
    title:{
       type: String,
       required:true
    },
    description:{
       type: String,
       required:true
    },
    description:{
       type: Number,
       required:true
    },
    view:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type :Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

videoSchema.plugin(aggregatePaginate)

export const video =mongoose.model("video",videoSchema)