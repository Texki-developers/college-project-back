const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const bodyparser = require("body-parser")
const cors = require("cors")
require('dotenv/config')

// Import routes
const authRoute = require('./routes/auth')
const mechines = require('./routes/postMechines/postMechine')
const workers = require('./routes/postWorkers/postWorkers')

// Middlewares
// app.use('/api/auth',authRoute);
app.use(cors({
    origin:"*"
}))
app.use(bodyparser.json())
app.use('/api/auth',authRoute)
app.use('/api/mechines',mechines)
app.use('/api/workers',workers)

// Start server and listen to port 5000
app.listen(5000,()=>{
    console.log("Server started and running on port 5000");
    mongoose.connect(process.env.MONGO_URI,()=>{
        console.log("Database connected successfully");
    })
})