import dotenv from "dotenv";

dotenv.config({path : '../.env'})

export const port = 5000;

export const mongodbURL = process.env.MongoDb_URI;

// "mongodb://127.0.0.1:27017/Books" - localhost