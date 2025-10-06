import { Router } from "express";
import verifyUser from "../middlewares/verifyUser.js";
import { addContent, deleteContent } from "../controller/content.controller.js";



const contentRouter = Router()


contentRouter.route("/add").post(verifyUser , addContent)
contentRouter.route("/delete/:id").delete(verifyUser , deleteContent)



export default contentRouter