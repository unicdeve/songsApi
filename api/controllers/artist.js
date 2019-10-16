const Artist = require('../models/artist');


exports.createArtist = (req, res) => {
    const newArtist = new Artist(req.body);
    newArtist.save()
        .then(artist => res.json(artist))
        .catch(err => res.status(400).json({ error: err }))
}

exports.getArtists = (req, res) => {
    Artist.find()
        // .select("_id body title")
        .then(artists => res.json(artists))
        .catch(err => res.status(400).json({error: err}));
};
