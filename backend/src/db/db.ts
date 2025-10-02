import mongoose, { mongo } from "mongoose";



const ConnectDb = async() =>{
  try {
      const mongoUri = process.env.MONGODB_URI
       if (!mongoUri) {
          throw new Error("MONGODB_URI is not defined in environment variables");
      }
      const connectionInstance = await mongoose.connect(mongoUri)
       console.log(`MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongo db connection error",error);
    
  }
}

export default ConnectDb