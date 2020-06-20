const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    author: {
        type: String,
        unique: false,
        required: false,
        ref: "author",
    },
    date: {
        type: Date,
        unique: false,
        required: false,
        ref: "date",
    },
    title: {
        type: String,
        unique: false,
        required: false,
        ref: "title",
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

module.exports = historySchema;