import dotenv from "dotenv";

dotenv.config()

export const port = 5000;

export const mongodbURL = process.env.MONGODB_URI;

// "mongodb://127.0.0.1:27017/Books" - localhost