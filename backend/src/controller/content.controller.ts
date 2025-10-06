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
      
       return   res.status(200)
         .json({message : "Succesfully Content Content" , data: {contents}}  )
 } catch (error) {
     return res.status(400).json({ error: "Invalid request" });
 }
}

const deleteContent = async(req : Request , res : Response)=>{
   
 try {
      const {id} = req.params
     
      const content = await Content.findByIdAndDelete(id)
 
      if (!content) {
       throw new Error("Cant Find Content to delete")
      }
 
     return res.status(200)
      .json({message :"Successfully deleted Content"})
 } catch (error) {
      if (error instanceof Error) {
       return  res.status(400).json({error : error.message})
      }
      return res.status(400).json({ error: "Invalid request" });
 }
}




export  {addContent ,deleteContent}