import mongoose, { Schema }  from "mongoose";




const linkSchema  = new Schema ({
   user :{
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
   },

} , {timestamps:true})



export const Link = mongoose.model("Link" , linkSchema)