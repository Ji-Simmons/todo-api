const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    task: {
        type: String,
        unique: false,
        required: false,
        ref: "task",
    },
    date: {
        type: String,
        unique: false,
        required: false,
        ref: "date",
    },
    
},
// If you want your model to store
// timestamps when things are updated/created
// keep this code, otherwise, throw it away
{
    // timestamps: false,
}
);

module.exports = tasksSchema;