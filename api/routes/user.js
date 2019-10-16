const express = require('express');
const router = express.Router();
const { userCreateValidator } = require('../validators');

// Controllers
const { allUsers, getUser, createUser } = require('../controllers/user');


// @route GET api/user/all
// @desc Get all user
// @access Public
router.post('/', userCreateValidator, createUser);


// @route GET api/user/all
// @desc Get all user
// @access Public
router.get('/all', allUsers);


// @route GET api/user/:ID
// @desc Get user by _id
// @access Public
router.get('/:userId', getUser);


module.exports = router;