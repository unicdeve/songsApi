const _ = require('lodash');
const User = require('../models/user');


exports.createUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ error: err }))
}

exports.allUsers = (req, res) => {
    User.find((err, users) => {
        if(err) res.status(400).json({error: err})
        res.json(users)
    })
    .select("_id first_name last_name");
};


exports.getUser = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};