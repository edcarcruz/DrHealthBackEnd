const mongoose = require('mongoose')
/// MODELS

const IllnessSchema = new mongoose.Schema({
    name: String,
    symptoms: String,
    description: String,
    image: String
})

const Illness = mongoose.model('Illness', IllnessSchema)

module.exports = Illness