const express = require('express');
const router = express.Router();
const { songCreateValidator, addCommentValidator } = require('../validators');


// Controllers
const { getSongs, createSong, addComment } = require('../controllers/song');


// @route GET api/song/all
// @desc Get all Songs endpoint
// @access Public
router.get('/all', getSongs);


// @route GET api/song
// @desc Get all user
// @access Public
router.post('/', songCreateValidator, createSong);


// @route GET api/song
// @desc Get all user
// @access Public
router.post('/comment/:id', addCommentValidator, addComment);


module.exports = router;