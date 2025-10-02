
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"



const userSchema = new Schema ({
    name : {
        type : String,
        required:true
    },
     email : {
        type : String,
        required:true,
        unique:true
    },
     password : {
        type : String,
        required:true
    }
} , {timestamps:true})


userSchema.pre("save" , async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    }else{
        next()
    }
})


userSchema.methods.IspasswordCorrect =async function (password:string) {
    return await bcrypt.compare(password , this.password)
}




export const User = mongoose.model("User" , userSchema)