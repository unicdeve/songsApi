const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model("user", userSchema);