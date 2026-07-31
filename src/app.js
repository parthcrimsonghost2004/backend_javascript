import express from 'express';
const app = express();
import cors from 'cors'
import cookieParser from 'cookie-parser'
export {app}

app.use(cors({origin: process.env.CORS_ORIGIN, credentials: true}))
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true, limit:"50mb"}))
app.use(express.static('public'))
app.use(cookieParser())