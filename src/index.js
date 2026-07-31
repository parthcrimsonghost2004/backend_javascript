import dotenv from 'dotenv';
dotenv.config({ path: "./env" });

// import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';
import my_DB from './db/index.js';
import { app } from './app.js';


my_DB().then(()=>{app.on("error", (error)=>{console.log(error); process.exit(1)});
    app.listen(process.env.PORT, ()=>{console.log(`Server is running on port ${process.env.PORT}`)})}).catch((error)=>{console.log("ERROR: ", error); process.exit(1)})

// // require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config({ path: "./env" });
// // const express= require('express');
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';
// import express from 'express';
// const app = express();

// const PORT = process.env.PORT || 3000


//     (async () => {
//         try {
//            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            
     
//             app.on("error", (error) => {
//                 console.log(error)
//                 throw error
//             })

//             app.listen(process.env.PORT, ()=>{console.log(`Server is running on port ${process.env.PORT}`)})
//         } catch (error) {
//             console.log("ERROR: ", error)
//             throw error
//         }
//     })()

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.get('/youtube', (req, res) => {
//     res.send('welcome to my youtube');
// })

// app.get('/instagram', (req, res) => {
//     res.send('Welcome to my instagram page.')
// })
// app.get('/twitter', (req, res) => { res.send('Welcome to twitter.') })

// app.get('/jokes', (req, res) => {
//     const jokes = [{ id: 1, title: "first joke", content: "this is my first joke" }, { id: 2, title: "second joke", content: "this is my second joke" }, { id: 3, title: "third joke", content: "this is my third joke" }, { id: 4, title: "fourth joke", content: "this is my fourth joke" }, { id: 5, title: "fifth joke", content: "this is my fifth joke" }];
//     res.send(jokes);
// })

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });