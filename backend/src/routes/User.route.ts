import { Router } from "express";
import { createUser, loginUser, LogoutUser } from "../controller/user.controller.js";


const userRouter = Router()




userRouter.route("/signup").post(createUser)
userRouter.route("/Login").post(loginUser)
userRouter.route("/logout").post(LogoutUser)



export default userRouter