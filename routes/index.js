'use strict';

// node_modules
const express = require('express');
const router = express.Router();
const passport = require('passport');
// Middleware
const loginChecker = require('../middlewares/login_checker');
// Routes
const index = require('./routes');
const users = require('./routes/users');
const login = require('./routes/login');
const logout = require('./routes/logout');

// Passport middleware
require('../middlewares/passport');
router.use(passport.initialize());
router.use(passport.session());

// No need to login
router.use('/', index);
router.use('/login', passport.authenticate('local'), login);
router.use('/logout', logout);

// Login checker middleware
router.use(loginChecker);
// Need login
router.use('/users', users);

module.exports = router;
