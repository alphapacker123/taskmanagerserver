//import env
require('dotenv').config()


//import express
const express=require('express')

//cors
const cors=require('cors')
const router = require('./routes/router')

//import db

require('./db/connection')

//server 
const server=express()


//coonect front end
server.use(cors())
server.use(express.json())

//ask server to use router
server.use(router)


const port=4000|| process.env.port
server.listen(port,()=>{
    console.log(`taskdb server started at port ${port}`);
})