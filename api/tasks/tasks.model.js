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
    owner: {
        type: String,
        unique: false,
        required: false,
        ref: "owner",
    },
    description: {
        type: String,
        unique: false,
        required: false,
        ref: "description",
    },
    name: {
        type: String,
        unique: false,
        required: false,
        ref: "name",
    },
    age: {
        type: String,
        unique: false,
        required: false,
        ref: "age",
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