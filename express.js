const express = require('express')
const app = express ()

app.use((req,res,next)=>{
    req.m
})

app.get('/',(req , res)=>{
    res.send("hello node")
})

app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
})