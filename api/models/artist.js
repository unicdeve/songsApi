const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    is_famous: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model("artist", artistSchema);