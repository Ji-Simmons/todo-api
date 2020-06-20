const mongoose = require('mongoose');

const newpostSchema = new mongoose.Schema({
    
    author: {
        type: String,
        unique: false,
        required: false,
        ref: "author",
    },
    title: {
        type: String,
        unique: false,
        required: false,
        ref: "title",
    },
    date: {
        type: String,
        unique: false,
        required: false,
        ref: "date",
    },
    copy: {
        type: String,
        unique: false,
        required: false,
        ref: "copy",
    }
},
// If you want your model to store
// timestamps when things are updated/created
// keep this code, otherwise, throw it away
{
    // timestamps: false,
}
);

module.exports = newpostSchema;