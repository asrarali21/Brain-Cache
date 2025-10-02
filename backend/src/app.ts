import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { initAuth } from "./utils/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.get("/api/test", (req, res) => {
    res.json({ message: "Server is working!" });
});

// Initialize auth and set up routes
const setupAuth = async () => {
    const auth = await initAuth();
    app.use("/api/auth", toNodeHandler(auth));
};

setupAuth().catch(console.error);

export default app;
