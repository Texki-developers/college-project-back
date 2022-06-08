const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const  bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

// Import routes
const authRoute = require('./routes/auth')

// Configuration
app.use(bodyParser.json())
app.use(cors(corsOptions))


// Middlewares
// app.use('/api/auth',authRoute);
app.use('/api/v1/auth',authRoute)

+

// Start server and listen to port 5000
app.listen(5000,()=>{
    console.log("Server started and running on port 5000");
    mongoose.connect(process.env.MONGO_URI,()=>{
        console.log("Database connected successfully");
    })
})

