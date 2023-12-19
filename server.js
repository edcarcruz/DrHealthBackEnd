// DEPENDENCIES
require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const routes = require("./routes/index.js")
const connection = require("./models/index.js")
const cors = require('cors')

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use("/", routes)

app.use((req, res) => {res.status(404).json({message: "Not a Route"})})

// LISTENER
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))

