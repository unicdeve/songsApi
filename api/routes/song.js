const express = require('express');
const router = express.Router();
const { songCreateValidator } = require('../validators');


// Controllers
const { getSongs, createSong } = require('../controllers/song');


// @route GET api/song/all
// @desc Get all Songs endpoint
// @access Public
router.get('/all', getSongs);


// @route GET api/song
// @desc Get all user
// @access Public
router.post('/', songCreateValidator, createSong);


module.exports = router;