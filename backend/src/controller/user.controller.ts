
import { User } from "../models/User.model.js";
import { createUserSchema, type CreateUserInput } from "../schemas/user.schema.js";



import type { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
   try {
     const data : CreateUserInput = createUserSchema.parse( req.body)
    
     console.log(data);

     const validUser  =  await User.find({email :data.email}) 


     if (validUser) {
      throw new Error("User Already Exist")
     }

     const user = await User.create({
             name: data.name,
      email: data.email,
      password :data.password
     })


     return res.status(201).json({
        message:"User Created",
        data :{
           name : data.name,
           email : data.email
        }
     })
   } catch (err) {
     if (err instanceof Error) {
             return res.status(400).json({ error: err.message });
     }
     return res.status(400).json({ error: "Invalid request" });
   }
    
}

interface User {
     email : string,
     password : string
}


const loginUser = async (req : Request , res:Response)=>{
   try {
        const {email ,  password} : User = req.body
      
       const user = await User.findOne({email})

       const validatePassword = user?.IspasswordCorrect(password)

       if (!validatePassword) {
          throw new Error("Incorrect Password")
       }

       const accessToken = user?.GenerateAccessToken()
       const refreshToken = user?.GenerateRefreshToken()
    
       const options ={
         httponly:true,
         secure:false
       }

      return  res.status(200)
       .cookie('accessToken' , accessToken , options)
       .cookie('refreshToken' , refreshToken , options)
       .json("User login Successfully")
     
   } catch (error) {
     return res.status(400).json({ error: "Invalid request" });
   }
}


const LogoutUser = async (req : Request , res: Response)=>{
    

       const options ={
         httponly:true,
         secure:false
       }
   return res.status(200)
   .clearCookie("accessToken" , options)
   .clearCookie("refreshToken" , options)
   .json("User Logout Successfully")
}


export {createUser , loginUser ,LogoutUser}