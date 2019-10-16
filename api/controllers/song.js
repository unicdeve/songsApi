const Song = require('../models/song');


exports.createSong = (req, res) => {
    const newSong = new Song(req.body);
    newSong.save()
        .then(song => res.json(song))
        .catch(err => res.status(400).json({ error: err }))
}

exports.getSongs = (req, res) => {
    Song.find()
        // .select("_id ")
        .then(songs => res.json(songs))
        .catch(err => res.status(400).json({error: err}));
};
