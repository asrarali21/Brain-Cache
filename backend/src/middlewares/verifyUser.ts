import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

const verifyUser = async (req:Request , res:Response ,next:NextFunction)=>{
           try {
            const token = req.cookies?.accessToken
             
            if (!token) {
                throw new Error("Token not Found")
            }
            const accessTokenSecet = process.env.ACCESS_TOKEN_SECRET

            if (!accessTokenSecet) {
                throw new Error("Secret is not there in env")
            }
            const Decodetoken = jwt.verify(token , accessTokenSecet)
            console.log(Decodetoken);
            

            if (!Decodetoken) {
                throw new Error("Invalid Credential")
            }

            (req as any ).user = Decodetoken

            next()
           } catch (err) {
           res.status(400)
            if (err instanceof Error) {
             return res.status(400).json({ error: err.message });
     }
           }
}

export default  verifyUser