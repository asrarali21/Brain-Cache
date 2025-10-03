import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import type { AnyZodObject } from "zod/v3";



const validate = (schema : AnyZodObject) => (req: Request, res: Response, next: NextFunction) =>{
    try {
        schema.parse(req.body)
          next();
    } catch (error)  {
        if (error instanceof ZodError) {
            return res.status(400).json({ issues: error.issues });
        }
        return res.status(500).json({ error: "Internal server error" });
    }
}