const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv/config')

// Import routes
const authRoute = require('./routes/auth')


// Middlewares
// app.use('/api/auth',authRoute);
app.use('/api/auth',authRoute)

// Start server and listen to port 5000
app.listen(5000,()=>{
    console.log("Server started and running on port 5000");
    mongoose.connect(process.env.MONGO_URI,()=>{
        console.log("Database connected successfully");
    })
})