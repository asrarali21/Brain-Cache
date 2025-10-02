import app from "./app.js";
import ConnectDb from "./db/db.js";
import dotenv from "dotenv";


dotenv.config()



ConnectDb().then(()=>{
  app.listen(process.env.PORT , ()=>{
    console.log(`server running at ${process.env.PORT}`);
})
}).catch((error)=>{
    console.log("server error mongodb " , error);
    
})
