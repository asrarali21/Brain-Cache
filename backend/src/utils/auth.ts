import { betterAuth, url } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";


const mongoUri = process.env.MONGODB_URI
 if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in environment variables")
 }



const client = new MongoClient(mongoUri);
await client.connect();

const dbName = client.options.dbName|| "braincache";
const db = client.db(dbName);

export const auth = betterAuth({
    database: mongodbAdapter(db)
});