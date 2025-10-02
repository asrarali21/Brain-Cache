import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";


dotenv.config()


const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in environment variables");
}

const client = new MongoClient(mongoUri);

// Initialize the connection and export auth
let authInstance: any = null;

const initAuth = async () => {
    if (!authInstance) {
        await client.connect();
        const dbName = client.options.dbName || "braincache";
        const db = client.db(dbName);
        
        authInstance = betterAuth({
            database: mongodbAdapter(db),
            baseURL: "http://localhost:8000"  // Add this
        });
    }
    return authInstance;
};

export { initAuth };