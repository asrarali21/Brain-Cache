import mongoose from "mongoose";
import type { Request, Response } from "express";
import { Content } from "../models/Content.model.js";


const addContent = async (req:Request , res : Response)=>{
 try {
         const {title ,content,link } =req.body
   
   
   
         const contents = await Content.create({
           user:(req as any).user._id,
           title,
           content,
           link
         })
      
         res.status(200)
         .json({message : "Succesfully Content Content" , data: {contents}}  )
 } catch (error) {
    
 }
}

export  {addContent}