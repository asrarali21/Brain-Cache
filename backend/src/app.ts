import express from "express"
import cors from "cors"
import userRouter from "./routes/User.route.js";





const app = express()

app.use(cors())

app.use(express.json());



app.use("/api/v1/users/" , userRouter)


export default app

