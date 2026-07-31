// require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config({ path: "./env" });
// const express= require('express');
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
// import express from 'express';
// const app = express();

const PORT = process.env.PORT || 3000


    const my_DB= async () => {
        try {
            const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log(`${connectionInstance.connection.host}`)
            // app.on("error", (error) => {
            //     console.log(error)
            //     process.exit(1)
            // })

            // app.listen(process.env.PORT, ()=>{console.log(`Server is running on port ${process.env.PORT}`)})
        } catch (error) {
            console.log("ERROR: ", error)
          process.exit(1)
        }
    }

export default my_DB