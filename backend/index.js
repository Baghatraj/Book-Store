import express from "express";
import { port, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoutes.js";
import cors from 'cors';

const app = express()

app.use(cors()) // Allows All origins
app.use(express.json())

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('mern')
})

app.use('/books', bookRoute)


// app.use(cors({
//     origin : 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))


mongoose.connect(mongodbURL,{useNewUrlParser:true,useUnifiedTopology: true,writeConcern: {w: 'majority',},}).then(()=>{
    console.log('connected');
    app.listen(port, ()=>{
        console.log(`Server is listening to ${port}`);
    })
}).catch((err)=>{
    console.log(err);
})