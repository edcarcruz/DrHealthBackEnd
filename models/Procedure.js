const mongoose = require('mongoose')
/// MODELS

const ProcedureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cost: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
})

const Procedure = mongoose.model('Prodcedure', ProcedureSchema)

module.exports = Procedure