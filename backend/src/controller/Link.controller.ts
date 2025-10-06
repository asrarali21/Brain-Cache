import type { Request, Response } from "express";
import { Content } from "../models/Content.model.js";


const ShareSingleLink = async (req : Request , res : Response)=>{
 try {
          const {id} = req.params
          console.log(id);
          
   
          const content = await Content.findById( id)
          console.log(content);
          
   
   if (!content) {
      return res.status(404).json({ error: "Content not Found" });
    }

    if (!content.isPublic) {
        content.isPublic = true;
        await content.save()
    }

     return  res.status
       (200)
       .json({data : content})
 } catch (error) {
     if (error instanceof Error) {
       return res.status(400).json({error : error.message})
     }

    return res.status(400).json({error : "Invalid Request"})
 }


}


const shareAllLink = async (req : Request , res:Response)=>{
   try {
     
     const content = await Content.find()

     return res.status(200)
     .json({data : content})
   } catch (error) {
    return res.status(400).json({error : "Invalid Request"})
   }
}

export {ShareSingleLink , shareAllLink}