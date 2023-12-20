const db = require("../models")

// Get Procedure
const getProcedure = (req, res) => {
    db.Procedure.find({})
    .then((foundProcedure) => {
        if (!foundProcedure) {
            res.status(404).json({ message: "Cannot Find Procedure Information" })
        } else {
            res.status(200).json({ data: foundProcedure })
        }
    })
}

// Create Procedure
const createProcedure = (req, res) => {
    db.Procedure.create(req.body)
    .then((createdProcedure) => {
        if(!createdProcedure) {
            res.status(400).json({message: "Cannot Create Procedure"})
        } else {
            res.status(201).json({data: createdProcedure, message: "Procedure Created"})
        }
    })
}

// Update Procedure 
const updateProcedure = (req, res) => {
    db.Procedure.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((updatedProcedure) => {
        if(!updatedProcedure) {
            res.status(400).json({message: "Could Not Update Procedure Information"})
        } else {
            res.status(200).json({Data: updatedIllness, message: "Procedure Information Updated"})
        }
    })
}

// Delete Procedure
const deleteProcedure = (req, res) => {
    db.Procedure.findByIdAndDelete(req.params.id)
    .then((deleteProcedure) => {
        if(!deleteProcedure) {
            res.status(400).json({message: "Could Not Delete Procedure"})
        } else {
            res.status(200).json({Data: deleteIllness, message: "Procedure Information Deleted"})
        }
    })
}

// export functions
module.exports = {
    getProcedure,
    createProcedure,
    deleteProcedure,
    updateProcedure
}