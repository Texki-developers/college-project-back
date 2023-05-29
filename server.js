const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const  bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')


// Configuration
app.use(bodyParser.json())
app.use(cors({
    origin:"*"
}))
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

// Import routes
const authRoute = require('./routes/auth')
const mechines = require('./routes/postMechines/postMechine')
const workers = require('./routes/postWorkers/postWorkers');
const userRouter = require('./routes/user');

// Middlewares
// app.use('/api/auth',authRoute);
app.use('/api/auth',authRoute)
app.use('/api/mechines',mechines)
app.use('/api/workers',workers)
app.use('/api/user',userRouter);



// Middlewares
// app.use('/api/auth',authRoute);
app.use('/api/v1/auth',authRoute)


// Start server and listen to port 5000
app.listen(5000,()=>{
    console.log("Server started and running on port 5000");
    mongoose.connect(process.env.MONGO_URI,()=>{
        console.log("Database connected successfully");
    })
})

