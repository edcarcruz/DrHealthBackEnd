const mongoose = require('mongoose')
/// MODELS

const IllnessSchema = new mongoose.Schema({
    name: { type: String, required: true },
    symptoms: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
})

const Illness = mongoose.model('Illness', IllnessSchema)

module.exports = Illness