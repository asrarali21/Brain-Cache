import { Router } from "express";
import verifyUser from "../middlewares/verifyUser.js";
import { shareAllLink, ShareSingleLink } from "../controller/Link.controller.js";



const linkRouter =  Router()



linkRouter.route("/allShare").get(verifyUser , shareAllLink)
linkRouter.route("/:id").get(verifyUser , ShareSingleLink)


export default linkRouter
