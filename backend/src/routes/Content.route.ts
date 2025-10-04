import { Router } from "express";
import verifyUser from "../middlewares/verifyUser.js";
import { addContent } from "../controller/content.controller.js";



const contentRouter = Router()


contentRouter.route("/add").post(verifyUser , addContent)



export default contentRouter