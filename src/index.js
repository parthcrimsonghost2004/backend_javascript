// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();
// const express= require('express');
import express from 'express';
const app=express();

const PORT=process.env.PORT || 3000


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/youtube',(req,res)=>{
    res.send('welcome to my youtube');
})

app.get('/instagram',(req,res)=>{
    res.send('Welcome to my instagram page.')
})
app.get('/twitter',(req,res)=>{res.send('Welcome to twitter.')})

app.get('/jokes',(req,res)=>{
    const jokes=[{id:1,title:"first joke",content:"this is my first joke"},{id:2,title:"second joke",content:"this is my second joke"},{id:3,title:"third joke",content:"this is my third joke"},{id:4,title:"fourth joke",content:"this is my fourth joke"},{id:5,title:"fifth joke",content:"this is my fifth joke"}];
    res.send(jokes);
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});