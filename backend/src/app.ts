import express from "express"
import cors from "cors"
import userRouter from "./routes/User.route.js";


import cookieParser from "cookie-parser"
import contentRouter from "./routes/Content.route.js";
import tagRouter from "./routes/Tag.route.js";
import linkRouter from "./routes/Link.route.js";


const app = express()

app.use(cors())

app.use(express.json());
app.use(cookieParser())


app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use("/api/v1/users/" , userRouter)
app.use("/api/v1/content/" ,contentRouter )
app.use("/api/v1/tag/" ,tagRouter )
app.use("/api/v1/share/" , linkRouter)


export default app

