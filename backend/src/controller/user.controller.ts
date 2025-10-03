
import { User } from "../models/User.model.js";
import { createUserSchema, type CreateUserInput } from "../schemas/user.schema.js";


import type { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
   try {
     const data : CreateUserInput = createUserSchema.parse( req.body)
    
     console.log(data);

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

export {createUser}