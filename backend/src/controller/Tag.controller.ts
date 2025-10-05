import type { Request, Response } from "express"
import { Tag } from "../models/Tag.model.js"



const addTag = async(req : Request, res : Response) =>{
     const {tags} = req.body


     const tag = await Tag.create({
        tags
     })

     return res.status(200)
     .json({message:"Successfully Added Tag" , data :{tag}})
}


export {addTag}