import { Router } from "express";
import { createUser, loginUser } from "../controller/user.controller.js";


const userRouter = Router()




userRouter.route("/signup").post(createUser)
userRouter.route("/Login").post(loginUser)



export default userRouter