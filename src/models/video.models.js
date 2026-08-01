import mongoose, {Schema} from 'mongoose'

const videoSchema = new Schema({

    title:{
    type:String ,
    required:true,
    lowercase:true,
    trim:true  
    },
    owner:{
    type:Schema.Types.ObjectId,
    ref:"user"
    },
    description:{
    type:String,
    required:true,
    lowercase:true,
    trim:true  
    },
    duration:{
    type:Number,
    required:true
    },
    views:{
    type:Number,
    default:0,
    required:true
    },
    thumbnail:{
    type:String,
     },
    videofile:{
    type:String,
    required:true
    },
    isPublished:{
        type:Boolean,
        default: false
    }
   
},{timestamps:true})

export const video = mongoose.model("video",videoSchema)