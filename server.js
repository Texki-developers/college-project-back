const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');



dotenv.config();

// Configuration
app.use(cors());
// app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('public'));




// Import routes
const authRoute = require('./routes/auth');
const mechines = require('./routes/postMechines/postMechine');
const workers = require('./routes/postWorkers/postWorkers');
const userRouter = require('./routes/user');

// Middlewares
app.use('/api/auth', authRoute);
app.use('/api/mechines', mechines);
app.use('/api/workers', workers);
app.use('/api/user', userRouter);

// Set up multer for parsing form data

// // Handle form data
// app.post('/api/formdata',upload.single('image'), (req, res) => {
//   // Access the uploaded file using req.file
//   console.log(req.file);

//   // Access other form data using req.body
//   console.log(req.body);

//   // Handle the form data as needed

//   res.send('Form data received successfully');
// });

// Start server and listen to the specified port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started and running on port ${port}`);
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Database connected successfully');
  });
});

