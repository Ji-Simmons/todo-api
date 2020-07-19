const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    task: {
        type: String,
        unique: false,
        required: false,
        ref: "task",
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

module.exports = tasksSchema;