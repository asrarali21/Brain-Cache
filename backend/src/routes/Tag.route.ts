import { Router } from "express";
import verifyUser from "../middlewares/verifyUser.js";
import { addTag } from "../controller/Tag.controller.js";



const tagRouter = Router()



tagRouter.route("/tag").post(verifyUser , addTag)

export default tagRouter