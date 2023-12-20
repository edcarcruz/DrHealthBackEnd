const mongoose = require('mongoose')
/// MODELS

const ProcedureSchema = new mongoose.Schema({
    name: String,
    cost: String,
    description: String,
    image: String
})

const Procedure = mongoose.model('Prodcedure', ProcedureSchema)

module.exports = Procedure