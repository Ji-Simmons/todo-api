const mongoose = require('mongoose');

const boatsSchema = new mongoose.Schema({
    
    Brand: {
        type: String,
        unique: false,
        required: false,
        ref: "Brand",
    },
    Model: {
        type: String,
        unique: false,
        required: false,
        ref: "Model",
    },
    LOA: {
        type: String,
        unique: false,
        required: false,
        ref: "LOA",
    },
    Draft: {
        type: String,
        unique: false,
        required: false,
        ref: "Draft",
    },
    Fuel: {
        type: String,
        unique: false,
        required: false,
        ref: "Fuel",
    },
    Water: {
        type: String,
        unique: false,
        required: false,
        ref: "Water",
    },
    Power: {
        type: String,
        unique: false,
        required: false,
        ref: "Power",
    },
    Range: {
        type: String,
        unique: false,
        required: false,
        ref: "Range",
    },
    Pic: {
        type: String,
        unique: false,
        required: false,
        ref: "Pic",
    },
},
// If you want your model to store
// timestamps when things are upload/created
// keep this code, otherwise, throw it away
{
    // timestamps: false,
}
);

module.exports = boatsSchema;