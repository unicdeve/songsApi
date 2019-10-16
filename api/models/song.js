const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'artist'
    },
    album_name: {
        type: String
    },
    genre: {
        type: String,
        required: true
    },
    comments: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
          },
          text: {
            type: String,
            required: true
          },
          date: {
            type: Date,
            default: Date.now
          }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("song", songSchema);