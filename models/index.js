const mongoose = require('mongoose');
const {DATABASE_URL} = process.env

// DATABASE CONNECTION
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
// Connection Events
mongoose.connection
    .on("open", () => console.log("You're connected to mongoose"))
    .on("close", () => console.log("You're disconnected from mongoose"))
    .on("error", (error) => console.log(error));


module.exports = {
    Illness: require('./Illness.js')
}