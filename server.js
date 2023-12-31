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
const routes = require("./routes/index");
//connection import
const connection = require("./models/index");
// import cors
const cors = require("cors");

const User = require("./models/User");

const session = require("express-session");
const bcrypt = require("bcrypt");



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

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  });


///////////////////////////////
// ROUTES
////////////////////////////////

app.use("/", routes);

app.use((req, res) => {
  res.status(404).json({ message: "Not a Proper Route!" });
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
