const db = require("../models")

// Get Illness
const getIllness = (req, res) => {
    db.Illness.find({})
    .then((foundIllness) => {
        if (!foundIllness) {
            res.status(404).json({ message: "Cannot Find Illness Information" })
        } else {
            res.status(200).json({ data: foundIllness })
        }
    })
}

// Create Illness
const createIllness = (req, res) => {
    db.Illness.create(req.body)
    .then((createdIllness) => {
        if(!createdIllness) {
            res.status(400).json({message: "Cannot Create Illness"})
        } else {
            res.status(201).json({data: createdIllness, message: "Illness Created"})
        }
    })
}

// Update Illness 
const updateIllness = (req, res) => {
    db.Illness.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((updatedIllness) => {
        if(!updatedIllness) {
            res.status(400).json({message: "Could Not Update Illness Information"})
        } else {
            res.status(200).json({Data: updatedIllness, message: "Illness Information Updated"})
        }
    })
}

// Delete Illness
const deleteIllness = (req, res) => {
    db.Illness.findByIdAndDelete(req.params.id)
    .then((deleteIllness) => {
        if(!deleteIllness) {
            res.status(400).json({message: "Could Not Delete Illness"})
        } else {
            res.status(200).json({Data: deleteIllness, message: "Illness Information Deleted"})
        }
    })
}

// export functions
module.exports = {
    getIllness,
    createIllness,
    deleteIllness,
    updateIllness
}