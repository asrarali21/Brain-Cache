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

            if (Decodetoken) {
                throw new Error("Invalid Credential")
            }

            (req as any ).user = Decodetoken
            next()
           } catch (error) {
            throw new Error("")
           }
}

export default  verifyUser