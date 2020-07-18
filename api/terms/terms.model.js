const mongoose = require('mongoose');

const termsSchema = new mongoose.Schema({
    term: {
        type: String,
        unique: false,
        required: false,
        ref: "term",
    },
    definition: {
        type: String,
        unique: false,
        required: false,
        ref: "definition",
    },
    link:  {
        type: String,
        unique: false,
        required: false,
        ref: "link",
    },
    title: {
        type: String,
        unique: false,
        required: false,
        ref: "title",
    },
    
},
// If you want your model to store
// timestamps when things are updated/created
// keep this code, otherwise, throw it away
{
    // timestamps: false,
}
);

module.exports = termsSchema;