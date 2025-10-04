import express from "express"
import cors from "cors"
import userRouter from "./routes/User.route.js";


import cookieParser from "cookie-parser"


const app = express()

app.use(cors())

app.use(express.json());
app.use(cookieParser())


app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use("/api/v1/users/" , userRouter)


export default app

