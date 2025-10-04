import express from "express"
import cors from "cors"
import userRouter from "./routes/User.route.js";


import cookieParser from "cookie-parser"
import contentRouter from "./routes/Content.route.js";


const app = express()

app.use(cors())

app.use(express.json());
app.use(cookieParser())


app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use("/api/v1/users/" , userRouter)
app.use("/api/v1/content/" ,contentRouter )


export default app

