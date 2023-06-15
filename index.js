import express from 'express';
import dotenv from 'dotenv';
import { userMessagerouter } from './routes/getUserMessageRoute.js';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();

const app = express();
app.use(express.json())
dotenv.config();
app.use(cors())

app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*",function(_,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"),function(error){
        res.status(500).send(error)
    })
})

// routes 
app.use('/gmail',userMessagerouter)


const PORT = process.env.PORT || 7000

app.listen(PORT,() => {
    console.log(`your server is running on ${PORT}`);
})