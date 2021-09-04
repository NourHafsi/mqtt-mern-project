const express = require('express');
const cors = require('cors');
require('./config/db'); // import database
const logger = require('morgan');

const app = express();

// CORS Middleware
app.use(logger('dev'));

app.use(cors());

// express middleware handling the body parsing 
app.use(express.json({limit: '20mb'}));

// express middleware handling the form parsing
app.use(express.urlencoded({ extended: false }));

// middleware for handling sample api routes
app.use('/testeur', require('./routes/testeurCRUD'));
app.use('/auth', require('./routes/auth'));

// use port from environment variables for production
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})