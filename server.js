///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 4000
const { PORT } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import all available routes in our routes/index.js
const routes = require('./routes/index');
//connection import
const connection = require('./models/index')
// import cors
const cors = require('cors');

const bcrypt = require('bcrypt')
const session = require('express-session')

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);


///////////////////////////////
// ROUTES
////////////////////////////////

app.use('/', routes);

app.use((req, res) => {
    res.status(404).json({ message: 'Not a Proper Route!' })
})

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));