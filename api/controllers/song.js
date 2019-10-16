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


exports.addComment = (req, res) => {
    Song.findById(req.param.id)
        .then(song => {
            const newComment = {
                body: req.body.body,
                user: req.userId
            };
            if (song.comments.filter(comment => comment.user.toString() === req.userId).length > 0) {
                return res.status(400).json({ alreadycommented: "User already commenton this post" });
            }
            
            song.comments.unshift(newComment)

            song.save().then(song => res.json(song));
        })
        .catch(err => res.status(404).json({ songnotfound: 'No post found' }));
}
