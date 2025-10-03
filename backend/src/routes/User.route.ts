import { Router } from "express";
import { createUser } from "../controller/user.controller.js";


const userRouter = Router()



userRouter.route("/signup").post(createUser)



export default userRouter