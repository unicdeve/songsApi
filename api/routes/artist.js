const express = require('express');
const router = express.Router();
const { artistCreateValidator } = require('../validators');


// Controllers
const { getArtists, createArtist } = require('../controllers/artist');


// @route GET api/artist/all
// @desc Get all artists endpoint
// @access Public
router.get('/all', getArtists);


// @route GET api/artist/all
// @desc Get all user
// @access Public
router.post('/', artistCreateValidator, createArtist);


module.exports = router;