const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

app.use(express.static('build'))


const messageRoute = require('./routes/messageRoutes')

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

 
mongoose.connect(process.env.MONGO_URI)
.then(() => { 
    app.listen(process.env.PORT, ()=> {
        console.log("Listening to port " +process.env.PORT)
    })  
    
}) 
 
.catch((error) => {
    console.log(error) 
}) 

app.use('/api/message/', messageRoute)

