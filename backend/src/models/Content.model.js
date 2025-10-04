import { link } from 'fs'
import mongoose, { Schema } from 'mongoose'



const ContentSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
      content:{
        type:String,
        required:true
    }, 
    link:{
        type:String,
        required:true
    },
     user:{
        type:mongoose.Schema.Types.ObjectId,
        ref :"User",
        required : true
    },
     tag:[{type : mongoose.Schema.Types.ObjectId , ref:"Tag"}],
}, {timestamps:true})


export const Content = mongoose.model("Content" , ContentSchema)